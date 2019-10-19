export abstract class CommandHandlerBase<TCommand> {
    public abstract async Execute(command: TCommand) : Promise<void>;
}