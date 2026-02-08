const infoBox = document.getElementById("infoBox");

function showMe() {
    infoBox.innerHTML = `
        <h3>About Me</h3>
        <p>
            My name is <b>Srishti</b>. I am the founder of <b>Sumantra Tech Company</b>.
            I am an <b>AI Generalist</b> passionate about technology, innovation,
            and building intelligent solutions for society.
        </p>
        <p>
            This website is created to showcase the rich <b>history, culture,
            and pride of Bihar</b>.
        </p>
    `;
}

function showFather() {
    infoBox.innerHTML = `
        <h3>About My Father</h3>
        <p>
            <b>Mr. Manoj Kumar</b> is the father of Srishti.
            He is a <b>contractor</b> based in <b>Bettiah, Bihar</b>.
            He is hardworking, dedicated, and a strong support system
            for the family.
        </p>
    `;
}

function showMother() {
    infoBox.innerHTML = `
        <h3>About My Mother</h3>
        <p>
            <b>Usha Kumari</b> is the mother of Srishti.
            She is a <b>housewife</b> who manages the home with care,
            strength, and dedication, and plays a vital role
            in the family.
        </p>
    `;
}
