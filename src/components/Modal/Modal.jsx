import React, {Component} from "react";
import '../Modal/modal.css';

class Modal extends Component{
    // {active, setActive, setItems, items, idRename}
    constructor(){
        super()
        this.state = {
            titleInput: '',
            description: ''
        }
        this.saveNewItem = this.saveNewItem.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.saveСhange = this.saveСhange.bind(this);
        // bind привязка контекста


        
    };
    componentDidMount(){
        if(this.props.idRename){
            let item = this.props.items.filter((value) => {return value.id === this.props.idRename})
            this.setState({description: item[0].text, titleInput: item[0].title })
        } 
    }
  

    saveNewItem(){
        if (this.state.titleInput.length > 0) {
            this.props.setItems ([...this.props.items, 
                {
                    title: this.state.titleInput, 
                    text: this.state.description,
                    id: Date.now(),
        
                }])
                this.setState({description: '',titleInput:''})
        
                // this.props.setItems ([...this.props.items, this.state.titleInput])
                // добавление по кнопке 
                this.closeModal()
        } else {
            alert('Введите заголовок')
        }
       
    }

    saveСhange(){ //сохранение изменений в модалке
        if (this.state.titleInput.length > 0){
            let allTodo = this.props.items 
            let newIndex = allTodo.filter((value)=> value.id === this.props.idRename); // [{}]
            let index = allTodo.indexOf(newIndex[0]);
    
            
            allTodo[index].title = this.state.titleInput;
            allTodo[index].text = this.state.description;
    
    
            this.props.setItems([...allTodo])
             this.closeModal();
        } else {
            alert('Введите заголовок')
        }
        }  

    closeModal(){ //закрытие модалки
        this.props.setActive(false)
        this.props.setIdRename(undefined)
        
    }

   render(){
       return  <div className={this.props.active ? "modal active" : "modal"} onClick={this.closeModal}>
                 <div className={this.props.active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                    <p>Введите заголовок заметки</p>
                    <input className='modal__input' type='text' placeholder='Введите заголовок' maxLength="30" value={this.state.titleInput} onChange={e => this.setState({titleInput: e.target.value})}/>
                    <p>Введите текст заметки</p>

                    <input className='modal__input' type='text' placeholder='Введите текст' value={this.state.description} onChange={e => this.setState({description: e.target.value})}/>

                   <div className='buttons'>
                       { !this.props.idRename ? <button className='buttons__create' onClick={this.saveNewItem}>Создать</button> :  <button className='buttons__create' onClick={this.saveСhange}>Сохранить</button>  }
                        <button className='buttons__close' onClick={this.closeModal}>Закрыть</button>
                    </div> 
                   
                </div>
             </div>
        }
}

export default Modal;