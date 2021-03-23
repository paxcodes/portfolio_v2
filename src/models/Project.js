import BUILT_WITH from './BuiltWith.js';

export default class Project {
    constructor({ title, builtWith, description, screenshots }) {
        this.title = title;
        this.builtWith = this._transformBuiltWith(builtWith);
        this.description = description;
        this.screenshots = this._transformScreenshots(screenshots);
    }
    _transformScreenshots(screenshots) {
        return screenshots.map(value => ({
            alt: value.alt,
            src: `${process.env.VUE_APP_API_URL}/${value.src}`
        }));
    }

    screenshots
    _transformBuiltWith(builtWith) {
        const reducer = (currentData, builtWithKey) => {
            currentData[builtWithKey] = BUILT_WITH[builtWithKey]
            return currentData
        }

        return builtWith.reduce(reducer, {})
    }
}
