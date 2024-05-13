import { atom } from 'jotai';

// 创建一个 atom 来存储选中的组件
// 储存prompt
export const selectedComponentAtom = atom<string | null>('');
// 储存位置信息
export const setPositionAtom = atom({ x: 0, y: 0, z: 0 });
