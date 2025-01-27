export type IRisk = {
  description: string;
};

export type IRiskState = {
  risks: IRisk[];
  isLoading: boolean;
};
