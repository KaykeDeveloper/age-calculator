let day = document.getElementById('day')
let months = document.getElementById('month')
let years = document.getElementById('year')
let data = new Date

let anoAtual = data.getFullYear()

    checkForm = () => {
      
      const spanErrorDay = document.querySelector('#spanErrorDay')
      const spanErrorMonth = document.querySelector('#spanErrorMonth')
      const spanErrorYear = document.querySelector('#spanErrorYear') 
      const errorMessage = document.createElement('span')
    
      if(day.value == '' || months.value == '' || years.value == '') {
        
        labelDay.style.color = 'hsl(0, 100%, 67%)'
        labelMonth.style.color = 'hsl(0, 100%, 67%)'
        labelYear.style.color = 'hsl(0, 100%, 67%)'

        day.style.borderColor = 'hsl(0, 100%, 67%)'
        months.style.borderColor = 'hsl(0, 100%, 67%)'
        years.style.borderColor = 'hsl(0, 100%, 67%)'
        
        return false
      }


      if(day.value == '' ) {
        if(spanErrorDay.childElementCount == 0) {
            spanErrorDay.appendChild(errorMessage)
        }
        errorMessage.innerHTML = 'This field is required'
        errorMessage.style.color = 'hsl(0, 100%, 67%)'
        errorMessage.style.fontSize = '13px'
        errorMessage.style.fontFamily = 'Poppins-Regular'
        return false
      } else {
        day.style.borderColor = 'hsl(0, 0%, 86%)'
        labelDay.style.color = 'hsl(0, 1%, 44%)'
        if(spanErrorDay.childElementCount == 1) {
          spanErrorDay.remove('errorMessage')
        }
      } 
      
      if(months.value == '') {
        const errorMessage = document.createElement('span')
        if(spanErrorMonth.childElementCount == 0 ){
          spanErrorMonth.appendChild(errorMessage)
        }
        errorMessage.innerHTML = 'This field is required'
        errorMessage.style.color = 'hsl(0, 100%, 67%)'
        errorMessage.style.fontSize = '13px'
        errorMessage.style.fontFamily = 'Poppins-Regular'
        return false
      } else {
        months.style.borderColor = 'hsl(0, 0%, 86%)'
        labelMonth.style.color = 'hsl(0, 1%, 44%)'
        if(spanErrorMonth.childElementCount == 1) {
          spanErrorMonth.remove()
        }
        
      }
      
      if(years.value == '') {
        const errorMessage = document.createElement('span')
        if(spanErrorYear.childElementCount == 0) {
          spanErrorYear.appendChild(errorMessage)
        }
        errorMessage.innerHTML = 'This field is required'
        errorMessage.style.color = 'hsl(0, 100%, 67%)'
        errorMessage.style.fontSize = '13px'
        errorMessage.style.fontFamily = 'Poppins-Regular'
        return false
      } else {
        years.style.borderColor = 'hsl(0, 0%, 86%)'
        labelYear.style.color = 'hsl(0, 1%, 44%)'
        if(spanErrorYear.childElementCount == 1) {
          spanErrorYear.remove()
        }
        
      }

      if(day.value != '' && day.value < 1 || day.value > 31) {
        const invalidDay = document.querySelector('#invalidDay')
        if(invalidDay != 'block') {
          invalidDay.style.display = 'block'
          day.style.borderColor = 'hsl(0, 100%, 67%)'
          labelDay.style.color = 'hsl(0, 100%, 67%)'
          return false

        } else {
          invalidDay.style.display = 'none'
          day.style.borderColor = 'hsl(0, 0%, 86%)'
          labelDay.style.color = 'hsl(0, 1%, 44%)'
        }
       
      }

      if(months.value != '' && months.value < 1 || months.value > 12) {
        const invalidMonth = document.querySelector('#invalidMonth')
        if(invalidDay != 'block') {
          invalidMonth.style.display = 'block'
          months.style.borderColor = 'hsl(0, 100%, 67%)'
          labelMonth.style.color = 'hsl(0, 100%, 67%)'
          return false

        } else {
          invalidMonth.style.display = 'none'
          months.style.borderColor = 'hsl(0, 0%, 86%)'
          labelMonth.style.color = 'hsl(0, 1%, 44%)'
        }
        
      }

      if(years.value != '' && years.value < 1 || years.value > anoAtual ) {
        const invalidYear = document.querySelector('#invalidYear')
        if(invalidYear != 'block') {
          invalidYear.style.display = 'block'
          years.style.borderColor = 'hsl(0, 100%, 67%)'
          labelYear.style.color = 'hsl(0, 100%, 67%)'
          return false

        } else {
          invalidYear.style.display = 'none'
          years.style.borderColor = 'hsl(0, 0%, 86%)'
          labelYear.style.color = 'hsl(0, 1%, 44%)'
        }
      }
      return true
    }

    buttonClick = () => {

      if(invalidDay.style.display == 'block' || invalidMonth.style.display == 'block' || invalidYear.style.display == 'block') {
        invalidDay.style.display = 'none'
        invalidYear.style.display = 'none'
        invalidMonth.style.display = 'none'
      }
      
      checkForm()

      if(checkForm() == true) {

        const anoAtual = data.getFullYear()
        const yearscript = document.querySelector('#years-script')
        const dayscript = document.querySelector('#days-script')
        const monthscript = document.querySelector('#month-script')
        let mesAtual = data.getMonth() + 1
        const diaAtual = data.getDay()

        let idadeAnos = anoAtual - years.value
        let idadeMeses = mesAtual - months.value
        let idadeDias = diaAtual - day.value

        if(day.value < 1 || day.value > 31) {
          dayscript.innerHTML = '--'
        }else if(idadeDias < 0) {
          idadeMeses--
          idadeDias+=30
          dayscript.innerHTML = idadeDias
        }

        if(months.value < 1 || months.value > 12) {
          monthscript.innerHTML = '--'
        }else if(idadeMeses < 0) {
          idadeAnos--
          idadeMeses += 12
          monthscript.innerHTML = idadeMeses
        }
        else if(months.value <=  mesAtual) {
          monthscript.innerHTML =  mesAtual - months.value
        }

        if(years.value <= anoAtual){
          if (months.value != mesAtual && day.value != diaAtual && years.value > 0 && years.value < anoAtual) {
            yearscript.innerHTML = (anoAtual-years.value-1)
          } else if(months.value == mesAtual && day.value == diaAtual && years.value > 0 && years.value < anoAtual) {
            yearscript.innerHTML = (anoAtual-years.value)
          }
        }
      }
    }