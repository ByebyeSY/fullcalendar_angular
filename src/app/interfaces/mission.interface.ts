import { IPersonne } from "./personne.interface";

interface IMission {
  title: string;
  start: string;
  end: string;
  color: string;
  description: string;
}

export interface IMissionJson extends IMission {
  contributors: number[];
}

export interface IMissionData extends IMission {
  contributors: IPersonne[];
}
