export class LazyLoad {
    private loaded = false;
    private loadAction: Function;

    constructor(loadAction: Function) {
        this.loadAction = loadAction;
    }

    public async Execute(): Promise<void> {
        if (!this.loaded) {
            console.log(this.loaded);
            await this.loadAction();
            this.loaded = true;
        }
    }


}