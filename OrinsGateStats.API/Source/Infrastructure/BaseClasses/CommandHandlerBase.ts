import { ICommand } from '../Interfaces/ICommand';

export abstract class CommandHandlerBase<TCommand extends ICommand> {
    public abstract async Execute(command: TCommand) : Promise<any>;
}