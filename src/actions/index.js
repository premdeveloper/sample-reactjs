import axios from 'axios';
import { browserHistory } from 'react-router';
import Firebase from 'firebase';
import database from '../data/database'
import _ from 'lodash'
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from './types';

export function signinUser({ email, password }) {
  return function(dispatch) {

      database.find({email:email},(err,doc)=>{
          console.log('email is',email)
          if(err){
              dispatch(authError('Bad Login Info'));
          }
          else if(_.isEmpty(doc)){
              console.log('doc',doc)
              dispatch(authError('User not found with Email Id'));
          }else{
              if(doc[0].password==password){
              dispatch({ type: AUTH_USER })
              browserHistory.push('/feature');
              }else{
                  dispatch(authError('Wrong Password'));
              }
          }
      })
  }
}

export function signupUser({ email, password }) {
  return function(dispatch) {
      database.find({email},(err,docs)=>{
          if(err){
              dispatch(authError('Unexpected Exception'));
          }else if(!_.isEmpty(docs)){
              dispatch(authError('Email Id Already Registered'));
          }else{
              database.insert({email,password},(err)=>{
                  if(!err){
                      dispatch({ type: AUTH_USER });
                      browserHistory.push('/feature');
                  }
              })
          }
      })
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  return { type: UNAUTH_USER };
}

export function fetchMessage() {
  return{
    type: FETCH_MESSAGE,
    payload: "This is it!"
  }
}
