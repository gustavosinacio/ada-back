"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const RowReader = (row) => {
    const { Data: date, 'Nome do treino': sessionName, 'Nome do exercício': exercise, 'Ordem da série': setOrder, Peso: kg, Reps: reps, Distância: distance, Segundos: seconds, Notas: notes, 'Notas do treino': sessionNotes, RPE: rpe } = row, rest = __rest(row, ["Data", 'Nome do treino', 'Nome do exercício', 'Ordem da série', "Peso", "Reps", "Dist\u00E2ncia", "Segundos", "Notas", 'Notas do treino', "RPE"]);
    const formatedRow = Object.assign({ date,
        sessionName,
        exercise,
        setOrder,
        kg,
        reps,
        distance,
        seconds,
        notes,
        sessionNotes,
        rpe }, rest);
    return formatedRow;
};
exports.default = RowReader;
