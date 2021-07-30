"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const csv_parser_1 = __importDefault(require("csv-parser"));
const fs_1 = __importDefault(require("fs"));
const Reader = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = [];
    fs_1.default.createReadStream('strong.csv')
        .pipe(csv_parser_1.default())
        .on('data', (row) => {
        const { Data: date, ['Nome do treino']: sessionName, ['Nome do exercício']: exercise, ['Ordem da série']: setOrder, Peso: kg, Reps: reps, ['Distância']: distance, Segundos: seconds, Notas: notes, 'Notas do treino': sessionNotes, RPE: rpe } = row, rest = __rest(row, ["Data", 'Nome do treino', 'Nome do exercício', 'Ordem da série', "Peso", "Reps", 'Distância', "Segundos", "Notas", 'Notas do treino', "RPE"]);
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
        data.push(formatedRow);
    })
        .on('end', () => {
        console.log('CSV file successfully processed');
    });
    console.log(1, data);
    return data;
});
exports.default = Reader;
