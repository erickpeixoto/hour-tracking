
import styled from 'styled-components'
import {  Button as useButton, 
          Avatar as useAvatar,
          Anchor as useAnchor,
          CheckBox as useCheckBox,
          Input as useInput,
          Col, 
          Columns
           } from '../../../common/lib/Wrapper';

export const BoxActions = styled.div`

    span{
        background: red;
    }
    .colunm-menu a:hover {
        color: #5d52ef !important;
        text-decoration: none !important;
    }
    .box-paper.map {
        color: rgb(24, 48, 85);
        border-radius: 0px 6px 6px 0px;
    }
    .box-paper.calendar {
        color: rgb(24, 48, 85);
        border-radius: 6px 0px 0px 6px;
    }
    .box-paper.calendar:hover,
    .box-paper.map:hover{
        color: unset;
    }
    a.active{
        background:  rgb(24, 48, 85);
        color: white !important ;
    }
    a.active:hover{
        background:  rgb(24, 48, 85);
        color: white !important ;
    }
    position: absolute;
    right: 19px;
    top: 52px;
    z-index: 9;

`

export const Button = styled(useButton)`
   
   svg{
       margin-right: 5px;
       position: relative;
       top: -2px;
   }

`
export const Container= styled(Columns)`
   
  
`
export const Box = styled(Col)`
        background: white;
  

`
export const BoxMap = styled(Box)`
        position: absolute;
        right: 10px;
        top: 43px;
        bottom: 9px;
        border-radius: 0px 8px 8px 0px;
        width: 76% !important;
  
`
export const BoxFilter = styled(Box)`
       position: absolute;
       border-radius: 8px 0px 0px 8px;
       top: 43px;
       bottom: 9px;

`
export const BoxSearch = styled(Box)`
    position: absolute;
    border-bottom: 1px #f5f7fb solid;
    position: relative;
    padding: 6px 4px 0px 4px;
   
    svg{
        position: relative;
        top: -25px;
        left: 11px;
        color: #dbdbdb;

    }
`
export const InputSearch = styled(useInput)`
        padding-left: 34px !important;
  
`

export const BoxDrivers = styled(Box)`
       background: white;
       position: absolute;
       top: 70px;
       right: 0;
       left: 0;
       overflow: hidden;
       height: 392px;
`
export const BoxSituations = styled(Box)`
       position: absolute;
       bottom: 0;
       top: 448px;
       right: 0;
       left: 0;
       overflow: hidden;
       
       &:hover{
           overflow: auto;
           @media (max-width: 1500px) {
                 width: 104.5% !important;
            }
       }

`
export const Driver = styled(Columns)`
    padding: 8px 0px 48px 0px;
    max-height: 43px;
    overflow: hidden;
    left: 0px;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    width: 105%;

    &:hover{
        box-shadow: 0 0.6em 1.3em 0.123em rgba(10,10,10,0.1),0 0 0 1px rgba(10,10,10,0.02) !important;
        border: 0 !important;
        cursor: pointer;
        width: 105%;
        max-height: 48px !important;
        background: white;
        border-radius: 7px;
   }
   input[type="checkbox"]{
            position: relative;
            left: 0px;
            top: 5px;
            cursor: pointer;
   }
   .is-1,
   .is-3{
       background: unset !important;
   }
`

export const Situation = styled(Columns)`
    padding: 8px 0px 48px 0px;
    max-height: 43px;
    overflow: hidden;
    left: 0px;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    margin-bottom: 5px !important;
    border-bottom: 1px solid #f5f7fb;
    
   input[type="checkbox"]{
            position: relative;
            left: 0px;
            top: 5px;
            cursor: pointer;
   }
 
   &.pink{
        border-right: 6px solid pink;
   }
   &.green{
        border-right: 6px solid #6ae5b1;
   }
   &.blue{
        border-right: 6px solid #95cdec;
   }
   &.yellow{
       border-right: 6px solid #f3db94;
   }
   &.gray{
       border-right: 6px solid #dadada;
   }
`
export const Avatar = styled(useAvatar)`
    border-radius: 50%;
    position: relative;
    width: 41px;
    height: 41px;
    top: -9px;
   &.online{
        border: 3px solid #6be5b1;
   }

`
export const Text = styled(Col)`
    padding: 16px 0px 26px 12px;
    overflow: hidden;
    font-size: 10px;
    color: #173054;
    font-weight: bold;
 
    svg{
      color: #afafaf;
      margin-left: 6px;
      margin-right: 6px;
    }
    ${Box}{
        position: relative;
        right: 27px;
        width: 70px;
        border-top: 9px solid #0f48d6;
        text-align: center;
        border-radius: 4px;
        border-bottom: 1px solid gray;
        opacity: 0.1;
        z-index: 99999999;
        top: -15px;
        float: right;
        transition: opacity 0.3s;
        height: 37px;

        &:hover{
            opacity: unset;
            transition: opacity 0.3s;

        }
        span{
            position: relative;
            top: -32px;
            color: white;
            font-size: 8px;
        }
            
         @media (min-width: 1700px) {
            left: -42px;
        }   

     
    }

`
export const Tracking = styled(Col)`
    padding: 16px 0px 26px 12px;
    overflow: hidden;

`
export const Anchor = styled(useAnchor)`

`
export const CheckBox = styled(useCheckBox)`

`
export const BoxTracking = styled(Box)`
        position: fixed;
        top: 0;
        left: -50px;
        bottom: 0;
        background: white;
        z-index: 99;
        width: 0;
        transition: width 0.8s;
        transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
        box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.02);
        z-index: 999999999;
        padding: 15px;
        &.fullscreen{
            transition: width 0.8s;
            transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
            width: 50%;
            left: 0;
        }
        .anchor{
            margin: unset !important;
            position: relative;
            top: -39px;
        }
`

export const BoxNav = styled(Box)`
            border-bottom: 1px #f5f7fb solid;
            text-align: left;
            padding: 20px;
            
            a{
                float: right;
                position: relative;
                top: -25px;
                right: -23px;
                z-index: 99999;
                svg{
                    margin-right: unset;
                    position: relative;
                    top: unset;
                    width: 20px;
                    height: 20px;
                }
            }
    
`

export const TrackingAdd = styled(Box)`
        width: 64px;
        position: relative;
        top: -2px;
        z-index: 999;
        background: #ffffff4a;
        border: 2px dashed #9dc3cdb8 !important;
     
         @media (min-width: 1500px) and (max-width: 1700px) {
             left: -16px;
        }   
         @media (min-width: 1700px) {
            left: -35px;
        }   
        div {
            -webkit-animation: making-smoke 1s infinite;
            animation: making-smoke 1s infinite;
            -webkit-transform-origin: center center;
            transform-origin: center center;
            height: 36px;
            width: 36px;
            border-radius: 36px;
            box-shadow: #9dc3cdb8;
        }
        div:hover {
            animation: unset !important;
            cursor: pointer;
            background: #ffffff4a;
            svg{
                color: #60809c;
                transition: color 0.4s;
            }
        }

        @keyframes making-smoke {
        0% {
            background: rgba(157,195,205, 0.4);
            -moz-box-shadow: 0 0 0 0 rgba(157,195,205, 0.4);
            box-shadow: 0 0 0 0 rgba(157,195,205, 0.4);
        }
        70% {
            background: rgba(157,195,205, 0);
            -moz-box-shadow: 0 0 0 10px rgba(157,195,205, 0);
            box-shadow: 0 0 0 10px rgba(157,195,205, 0);
        }
        100% {
            background: rgba(157,195,205, 0);
            -moz-box-shadow: 0 0 0 0 rgba(157,195,205, 0);
            box-shadow: 0 0 0 0 rgba(157,195,205, 0);
        }
      }
      svg{
            width: 30px;
            height: 30px;
            position: relative;
            top: -9px;
            left: -7px;
            color: white;
      }

`


export const TrackingActions = styled(Box)`
        position: absolute;
        bottom: 0;
        padding: 15px;
        width: 100%;
        left: 0;
        border-top: 1px #f5f7fb solid;

        a{
            float: right;
        }

`

export const Input = styled(useInput)`
        
`
export const Form = styled.form`
        
`
