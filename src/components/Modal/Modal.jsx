import React, {Component} from "react";
import '../Modal/modal.css';

class Modal extends Component{
    // {active, setActive, setItems, items}
    constructor(){
        super()
        this.state = {
            titleInput: '',
            description: ''
        }
        this.addCategoryInput = this.addCategoryInput.bind(this);
        this.closeModal = this.closeModal.bind(this);
        // bind привязка контекста
    };

    addCategoryInput(){
    this.props.setItems ([...this.props.items, 
        {
            title: this.state.titleInput, 
            text: this.state.description,
            id: Date.now(),

        }])

        // this.props.setItems ([...this.props.items, this.state.titleInput])
        // добавление по кнопке 
        this.closeModal()
    }

    closeModal(){
        this.props.setActive(false)
    }

   render(){
       return  <div className={this.props.active ? "modal active" : "modal"} onClick={ () => this.props.setActive(false) }>
                 <div className={this.props.active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                    <p>Введите заголовок заметки</p>
                    <input type='text' placeholder='Введите заголовок' onChange={e =>  this.setState({titleInput: e.target.value})     } />
                    <p>Введите текст заметки</p>
                    <input type='text' placeholder='Введите текст' onChange={e => this.setState({description: e.target.value})}/>
                    <button onClick={this.addCategoryInput}>Создать</button>
                    <button onClick={this.closeModal}>Закрыть</button>
                </div>
             </div>
        }
}

export default Modal;