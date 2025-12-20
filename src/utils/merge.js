// 合并策略函数
import { INITIAL_TEMPLATES_CONFIG } from '../data/templates';
import { INITIAL_BANKS, INITIAL_DEFAULTS } from '../data/banks';
import { deepClone, makeUniqueKey } from './helpers';

// 合并系统模板，系统模板强制更新，用户改动备份
export const mergeTemplatesWithSystem = (currentTemplates, { backupSuffix }) => {
  const systemMap = new Map(INITIAL_TEMPLATES_CONFIG.map(t => [t.id, deepClone(t)]));
  const merged = INITIAL_TEMPLATES_CONFIG.map(t => deepClone(t));
  const notes = [];
  const existingIds = new Set(merged.map(t => t.id));

  currentTemplates.forEach(t => {
    if (systemMap.has(t.id)) {
      const sys = systemMap.get(t.id);
      const isDifferent = t.name !== sys.name || t.content !== sys.content;
      if (isDifferent) {
        const backupId = makeUniqueKey(t.id, existingIds, "user");
        existingIds.add(backupId);
        merged.push({ ...deepClone(t), id: backupId, name: `${t.name}${backupSuffix || ""}` });
        notes.push(`模板 ${t.id} 已更新，旧版备份为 ${backupId}`);
      }
    } else {
      let newId = t.id;
      if (existingIds.has(newId)) {
        newId = makeUniqueKey(newId, existingIds, "custom");
        notes.push(`自定义模板 ${t.id} 与系统冲突，已重命名为 ${newId}`);
      }
      existingIds.add(newId);
      merged.push({ ...deepClone(t), id: newId });
    }
  });

  return { templates: merged, notes };
};

// 合并系统词库与默认值，系统词库强制更新，用户改动备份
export const mergeBanksWithSystem = (currentBanks, currentDefaults, { backupSuffix }) => {
  const mergedBanks = deepClone(INITIAL_BANKS);
  const mergedDefaults = { ...INITIAL_DEFAULTS };
  const notes = [];
  const existingKeys = new Set(Object.keys(mergedBanks));

  Object.entries(currentBanks || {}).forEach(([key, bank]) => {
    if (INITIAL_BANKS[key]) {
      const isDifferent = JSON.stringify(bank) !== JSON.stringify(INITIAL_BANKS[key]);
      if (isDifferent) {
        const backupKey = makeUniqueKey(key, existingKeys, "user");
        existingKeys.add(backupKey);
        mergedBanks[backupKey] = deepClone(bank);
        if (currentDefaults && key in currentDefaults) mergedDefaults[backupKey] = currentDefaults[key];
        notes.push(`词库 ${key} 已更新，用户改动备份为 ${backupKey}`);
      }
    } else {
      let newKey = key;
      if (existingKeys.has(newKey)) {
        newKey = makeUniqueKey(newKey, existingKeys, "custom");
        notes.push(`自定义词库 ${key} 与系统冲突，已重命名为 ${newKey}`);
      }
      existingKeys.add(newKey);
      mergedBanks[newKey] = deepClone(bank);
      if (currentDefaults && key in currentDefaults) mergedDefaults[newKey] = currentDefaults[key];
    }
  });

  Object.entries(currentDefaults || {}).forEach(([key, val]) => {
    if (!(key in mergedDefaults) && mergedBanks[key]) {
      mergedDefaults[key] = val;
    }
  });

  return { banks: mergedBanks, defaults: mergedDefaults, notes };
};
