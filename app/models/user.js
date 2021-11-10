import { attr } from '@ember-data/model';
import { inject as service } from '@ember/service';
import Model from '@ember-data/model';

export default class User extends Model {
  @service store;

  @attr('string') name;
  @attr('', {
    defaultValue: () => {
      return {
        residentIds: [],
      };
    },
  })
  address; //Occurs for @attr that are objects

  //Also occurs for get() values that are objects
  get computers(){
    return {
      mac: ["MAC1", "MAC2"],
      pc: ["PC1", "PC2"],
      count: 5,
      favorites: {
        pc: "PC2",
        mac: "MAC1"
      }
    }
  }
}
