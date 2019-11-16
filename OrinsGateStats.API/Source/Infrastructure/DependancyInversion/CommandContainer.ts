import { Dictionary } from '../../Utilities/Dictionary';
import { CommandHandlerBase } from '../BaseClasses/CommandHandlerBase';
import { ICommand } from '../Interfaces/ICommand';

export class CommandContainer {

    private containerDictionary: Dictionary<string, CommandHandlerBase<ICommand>> =
        new Dictionary<string, CommandHandlerBase<ICommand>>();

    public Register(commandName: string, handler: CommandHandlerBase<ICommand>) {
        this.containerDictionary.Add(commandName, handler);
    }

    public async ExecuteCommand<TCommand extends ICommand>(command: TCommand): Promise<number> {
        if (this.containerDictionary.ContainsKey(command.Key)) {
            let handler = this.containerDictionary.Item(command.Key);
            return await handler.Execute(command);
        }
    }
}