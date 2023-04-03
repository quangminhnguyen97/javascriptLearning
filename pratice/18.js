function convertHTML(str) {

  const checkSpecialCharacters = (str) => {
    switch (str) {
      case '<':
        return '&lt;'        
      case '>':
        return '&gt;'        
      case '&':
        return '&amp;'        
      case '"':
        return '&quot;'        
      case '\'':
        return '&apos;'        
      default:
        return str        
    }
  }
  console.log( str.split('').map( (i) => checkSpecialCharacters(i)).join(''));
  return  str.split('').map( (i) => checkSpecialCharacters(i)).join('')
}

// convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos") // should return the string Hamburgers &lt; Pizza &lt; Tacos