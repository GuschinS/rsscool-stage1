import { newTag } from './create-element';
import { ProductCatalog } from './product-catalog';

class Main {
    constructor() {
        this.main = newTag('main');
        this.container = newTag('div', { className: 'container' });
    }
    render() {
        this.main.append(this.container);
        this.container.append(new ProductCatalog().render());

        return this.main;
    }
}

export { Main };