import BUILT_WITH from './BuiltWith.js';

export default class Project {
    constructor({ title, builtWith, description, screenshots }) {
        this.title = title;
        this.builtWith = this._transformBuiltWith(builtWith);
        this.description = description;
        this.screenshots = screenshots;
    }

    _transformBuiltWith(builtWith) {
        const reducer = (currentData, builtWithKey) => {
            currentData[builtWithKey] = BUILT_WITH[builtWithKey]
            return currentData
        }

        return builtWith.reduce(reducer, {})
    }
}
