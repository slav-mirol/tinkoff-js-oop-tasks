"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    return fio.split(' ')[1] + ' ' + fio.split(' ')[0]
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    const set = new Set(array)
    const ans = []
    set.forEach(function(value) {
        ans.push(value)
    })
    return ans
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    if (array.length === 0) {
        return false
    } else {
        const minimum = (array) => array.reduce((x, y) => Math.min(x, y));
        const maximum = (array) => array.reduce((x, y) => Math.max(x, y));
        return maximum(array)/minimum(array);
    }
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    constructor () {
        this.map = new Map();
    }

    set(key, value) {
        if (typeof(key) !== 'string' || typeof(value) !== 'string') return;
        this.map.set(key, value);
    }

    get(key) {
        return this.map.get(key);
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};