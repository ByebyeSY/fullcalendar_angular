import { IMissionData, IMissionJson } from "../interfaces/mission.interface";
import { IPersonne } from "../interfaces/personne.interface";

import personnes from "@Mocks/personnes.json";

export class Mission {
  static fromJsonToData(missions: IMissionJson[]): IMissionData[] {
    const m = missions.map((mission) => ({
      ...mission,
      contributors: mission.contributors.map(
        (contributor) =>
          (personnes as IPersonne[]).find(
            (personne) => contributor === personne.id,
          ) as IPersonne,
      ),
    }));
    console.log(m);

    return m;
  }
}
