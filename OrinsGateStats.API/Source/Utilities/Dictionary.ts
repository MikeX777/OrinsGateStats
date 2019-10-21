export class Dictionary<TKey, TValue> {
    private keys: TKey[] = [];
    private values: TValue[] = [];

    private count: number = 0;

    constructor();
    constructor(keys?: TKey[], values?: TValue[]) {
        if (keys !== null && keys !== undefined && values !== undefined) {
            if (keys.length === values.length) {
                this.keys = keys;
                this.values = values;
            }
        }
    }
 
    public ContainsKey(key: TKey): boolean {
        let returnValue = false;
        if (this.keys.indexOf(key) !== -1) {
            returnValue = true;
        }
        return returnValue;
    }
 
    public Count(): number {
        return this.count;
    }
 
    public Add(key: TKey, value: TValue) {
        if(!this.ContainsKey(key)) {
            this.count++;
            this.keys.push(key);
            this.values.push(value);
        }
    }
 
    public Remove(key: TKey): TValue {
        let index = this.keys.indexOf(key);
        let value = null;
        if (index > -1) {
            value = this.values[index];
            this.keys.splice(index, 1);
            this.values.splice(index, 1);
            this.count--;
        }
        return value;
    }

    public RemoveAt(index: number): TValue {
        let value = null;
        if (index > -1) {
            value = this.values[index];
            this.keys.splice(index, 1);
            this.values.splice(index, 1);
            this.count--;
        }
        return value;
    }
 
    public Item(key: TKey): TValue {
        return this.values[this.keys.indexOf(key)];
    }
 
    public Keys(): TKey[] {
        return this.keys;
    }
 
    public Values(): TValue[] {
        return this.values;
    }
}
