import{GOODLUCK,PRIMARY,SECONDARY,ERROR,INFO,WARNING,SHOW}from './Massage-types'
export const GoodLuckAction =(value)=>{
return{
    type:GOODLUCK,
    payload:value
}}
export const PrimaryAction =(value)=>{
    return{
    type:PRIMARY,
    payload:value
}}
export const SecondaryAction =(value)=>{
    return{
    type:SECONDARY,
    payload:value
}}
export const ErrorAction =(value)=>{
    return{
    type:ERROR,
    payload:value
}}
export const InfoAction =(value)=>{
    return{
    type:INFO,
    payload:value
}}
export const WarningAction =(value)=>{
    return{
    type:WARNING,
    payload:value
}}
export const ShowAction =(value)=>{
    return{
    type:SHOW,
    payload:value    
    }
}