import { ModelBase } from "../../Infrastructure/BaseClasses/ModelBase";
import { QueryContainer } from "../../Infrastructure/DependancyInversion/QueryContainer";
import { IResult } from "../../Infrastructure/Interfaces/IResult";
import { GetRaceQuery } from "../4.Data/QueryLayer/1.Queries/Race/GetRaceQuery";
import { GetRaceResult } from "../4.Data/QueryLayer/3.Results/Race/GetRaceResult";
import { CommandContainer } from "../../Infrastructure/DependancyInversion/CommandContainer";

export class Race extends ModelBase<number> {


    ID: number;
    Name: string;


    constructor(id: number, queryContainer: QueryContainer, commandContainer: CommandContainer, result?: IResult) {
        super(id, queryContainer, commandContainer, result);
    }

    public async Retrieve(): Promise<boolean> {
        if (!this.retrieved) {
            let result = await this.queryContainer.ExecuteQuery<GetRaceQuery, GetRaceResult>(
                new GetRaceQuery(this.ID)
            );

            if (result !== undefined) {
                this.AssignResult(result);
                this.retrieved = true;
            }
        }
        return this.retrieved;
    }
}