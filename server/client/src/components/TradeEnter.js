import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';
import {Field,reduxForm,formValues} from 'redux-form';
import {createTrade,fetchTrades} from '../actions/index';


class TradeEnter extends Component {

        warningMessage = true;


        radioOneIsChecked = true
        radioTwoIsChecked  = true
 


     alphaNumeric = value =>{
        if(!value){
            return 'required'
        }else{return value && /^(([1-9]\d{0,2}(,\d{3})*)|0)?\.\d{1,2}$/.test(value)
    ? undefined
    : 'Cannot have $ sign and must have 2 decimals'}
     }
   
    noNumerics = value => {
        if(!value){
            return "required"
        }else{ return value && /[0-9]+/.test(value)
    ? 'no numbers in ticker symbol'
    : undefined}
    }

    noNonNumerics = value => {
        if(!value){
            return 'required'
        }

        else{ return value && /\D+/.test(value)
        ? 'can not contain any non numeric characters'
        : undefined}
    }
    
    required = value => value ? undefined : 'Required'

    onSubmit = (formValues) => {
        this.props.createTrade(formValues,this.props.id);
    }

    submitValidation = () => {
        if(!this.props.valid || this.props.pristine){
            return true
        
        }else{return false}
    }

    renderInput = ({input,label,meta:{touched,error,warning}}) => {

        return (
            <div className="field" style={{width:'50%',margin:'0 40px'}}>
                <label>{label}</label>
                <div>
                <input {...input}/>
                {touched &&
                ((error && <span style={{color:'red'}}>{error}</span>)||
                (warning && <span style={{color:'red'}}>{warning}</span>))}
                </div>
            </div>
        );
    }

    renderDateInput = ({input,label}) => {

        return(
        <div className="field" style={{width:'20%',margin:'0 40px 20px',alignSelf:'center'}}>
        <label>{label}</label>
            <input {...input} type="date"/> 
            </div>
        );
    }   
    

    renderTrade = ()  => {
        
        if(Object.keys(this.props.formData).length === 0 && this.props.formData.constructor === Object){
            return (
                <div style={{height: '200px', width: '200px', backgroundColor:"green"}}>
                    Loading....
                </div>
            );
        
        }else if(this.props.formData.enterTradesForm.values !== undefined && this.props.formData.enterTradesForm.values.shortOrLong === "short"){
           

            this.radioOneIsChecked=false 
            return (
                <Fragment>
                <Field name="shortPrice" label="Short Price" component={this.renderInput} validate={[this.alphaNumeric]}/>
                <Field name="coverPrice" label="Cover Price" component={this.renderInput} validate={[this.alphaNumeric]}/>
                </Fragment>
            );
        }else if(this.props.formData.enterTradesForm.values !== undefined && this.props.formData.enterTradesForm.values.shortOrLong === "long"){
            this.radioOneIsChecked=true
            return (
                <Fragment>
                <Field name="buyPrice" label="Buy Price" component={this.renderInput} validate={[this.alphaNumeric]}/>
                <Field name="sellPrice" label="Sell Price" component={this.renderInput} validate={[this.alphaNumeric]}/>
                </Fragment>
            );
        }else {
    
    
    
            return (
                <Fragment>
                <Field name="buyPrice" label="Buy Price" component={this.renderInput} validate={[this.alphaNumeric]}/>
                <Field name="sellPrice" label="Sell Price" component={this.renderInput} validate={[this.alphaNumeric]}/>
                </Fragment>      
            );
        }
            
    
    }

    renderDate = () => {
        if(Object.keys(this.props.formData).length === 0 && this.props.formData.constructor === Object){
            return (
                <div style={{height: '200px', width: '200px', backgroundColor:"green"}}>
                    Loading....
                </div>
            );
        
        }else if(this.props.formData.enterTradesForm.values !== undefined && this.props.formData.enterTradesForm.values.typeOfTrade === "Swing Trade"){
           

            this.radioTwoIsChecked=false
            return (
                <Fragment>
                    <Field name="startDate" label="Dates" component={this.renderDateInput} validate={[this.required]}/>
                    <Field name="endDate" label='&nbsp;' component={this.renderDateInput} validate={[this.required]}/>
                </Fragment>
            );
        }else if(this.props.formData.enterTradesForm.values !== undefined && this.props.formData.enterTradesForm.values.typeOfTrade === "Day Trade"){
            this.radioTwoIsChecked=true
            return (
                <Fragment>
                    <Field name="startDate" label="Date" component={this.renderDateInput} validate={[this.required]}/>
                </Fragment>
            );
        }else {
    
    
    
            return (
                <Fragment>
                    <Field name="date" label="Date"component={this.renderDateInput} validate={[this.required]}/>
                </Fragment>      
            );
        }
    }

   

    isShortBool = () => {
        if(this.props.isShort){
            this.props.isShort(false)
        }else{
            this.props.isShort(true)
        }
    }

    /** handleSubmit is a prop off of redux-form,  here I'm using it as a replacement for preventDefault */

    render() {
        return (  
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form" >
                    <Field name="ticker" label="Enter Ticker/Symbol" component={this.renderInput} validate={[this.noNumerics]}/>
                    <div style={{display:'flex'}}>
                    <div>
                    {this.renderTrade()}
                    </div>
                    <div style={{alignSelf:'center'}}>
                    <label htmlFor="short">Short</label>
                    <Field name="shortOrLong" label="Short" type="radio" value="short" id="short" component="input" style={{marginRight:'20px'}}/>
                    <label htmlFor="long">Long</label>
                    <Field name="shortOrLong" label="Long" type="radio" value="long" id="long" component="input"  checked={ this.radioOneIsChecked ? true : false} />
                    </div>
                    </div>
                    <Field name="numberOfShares" label="# of Shares"  component={this.renderInput}  validate={[this.noNonNumerics]}/>

                    <div style={{display:'flex'}}> 
                    {this.renderDate()}
                    <div style={{alignSelf:'center'}}>
                    <label htmlFor="st">Swing Trade</label>
                    <Field name="typeOfTrade" label="Long" type="radio"  id="st" value="Swing Trade" component="input" style={{marginRight:'20px'}}  />
                    <label htmlFor="dt">Day Trade</label>
                    <Field name="typeOfTrade" label="Short" type="radio"  id="dt" value="Day Trade" component="input"  checked={ this.radioTwoIsChecked ? true : false}/>
                    </div>
                    </div>
                    <button className="ui button primary" disabled={this.submitValidation()}>Submit</button>
                </form>
        );  
    }
}
 
const mapStateToProps =  (state,ownProps) => {
    return {
        trades: state.trades,
        id: state.Auth.userId,
        formData: state.form,
        initialValues: ownProps.initialValues.ticker,
        submissionSuccess:state.submissionSuccess
    }
} 

export default connect(mapStateToProps,{createTrade,fetchTrades})(reduxForm({form: 'enterTradesForm',enableReinitialize:true})(TradeEnter));

    