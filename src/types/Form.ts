export type FormType = {
  name: string;
  email: string;
  // prefectures: PrefecturesType;
};

export const Prefectures = ['tokyo', 'osaka'] as const;

export type PrefecturesType = (typeof Prefectures)[number];
