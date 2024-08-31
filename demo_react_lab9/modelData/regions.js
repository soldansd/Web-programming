"use strict";

/*
 * Load the model data for Lab9. We load into the property
 * lab9models.regionsModel a function that returns an array of strings with the
 * names of the regions.
 *
 * 
 */

var lab9models;

if (lab9models === undefined) {
  lab9models = {};
}

lab9models.regionsModel = function () {
  return [
      "Аспирин",
      "Амброксол",
     "Амоксициллин",
      "Парацетамол",
      "Ибупрофен",
      "Лоратадин",
      "Дексаметазон",
      "Нурофен",
      "Цитрамон",
      "Феназепам",
      "Левомецетин",
  ].sort();
};
