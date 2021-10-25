import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Quote(props) {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const getQuotes = () => {
        const inspo = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
        fetch(inspo).then((res) => res.json()).then((data) => {
            console.log(data)
            let dataQuotes = data.quotes;
            // gives array of quotes
            let randomNum = Math.floor(Math.random() * dataQuotes.length);
            // randomization: iterating a random number from 0 to length of array
            let randomQuote = data.quotes[randomNum];
            // accessing a random quote corresponding with that random number 

            setQuote(randomQuote.quote); // now set the new quote 
            setAuthor(randomQuote.author); // set the new author
        });
    };

    const handleClick = () => {
        getQuotes();
    };

    return (
        <Container class="container-fluid">
            <Container id="quotes-box">
                <Container id="text"> {quote} <div id="author">{author} </div>
                    <Container id="author"><button class="quote-button-quote" onClick={handleClick} id="new-quote">
                        NEW QUOTE </button> </Container>
                    <Container id="credit">
                        {author}
                    </Container>
                </Container>
            </Container>
            <br></br>
        </Container>

    )
}


export default Quote;