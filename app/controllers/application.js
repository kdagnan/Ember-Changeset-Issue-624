import Controller from '@ember/controller';
import { Changeset } from 'ember-changeset';
import { inject as service} from '@ember/service';
import { action } from '@ember/object';

export default class Application extends Controller {

  @service store;
  constructor(){
    super(...arguments);

    const object = this.store.createRecord('user', {
      name: "Kyle"
    });

    this.changeset = Changeset(object);
  }

  @action
  onAccessNestedArray(){
    const residentIds = this.changeset.address.residentIds; //Access any nested value on high-level attribute
    this.changeset.name = "Bob"; //Edit any other attribute
  }

  @action
  onAccessNestedArrayWithGet(){
    const residentIds = this.changeset.get('address.residentIds'); //Does not occur when using .get() syntax
    this.changeset.name = "John";
  }

  get changeKeys(){
    return Object.keys(this.changeset.change);
  }

  get changesObjectsKeys(){
    return this.changeset.changes.mapBy('key');
  }
}