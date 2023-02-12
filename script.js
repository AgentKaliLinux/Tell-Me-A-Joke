function jokesforYou() {
    let btn = document.getElementById('btn');
    btn.onclick = () => {
        console.log("Hello")
        let jokesArray = [
            `Why did the chicken cross the playground?
             To get to the other slide`,
            `Why did the actor fall through the floorboards?
            They were going through a stage`,
            `Why did a scarecrow win a Nobel prize?
            He was outstanding in his field`,
            `Why are peppers the best at archery?
            Because they habanero`,
            `What did the duck say after she bought chapstick?
            Put it on my bill`,
            `Why did an old man fall in a well?
            Because he couldn’t see that well`,
            `What do you call a fake noodle?
            An impasta`,
            `What did the three-legged dog say when he walked into a saloon?
            “I’m looking for the man who shot my paw”`,
            `How do you tell the difference between a bull and a cow?
            It is either one or the udder`,
            `What’s red and smells like blue paint?
            Red paint`,
            `What’s the difference between a hippo and a Zippo?
            One is very heavy, the other is a little lighter`,
            `Why can’t you send a duck to space?
            Because the bill would be astronomical`,
            `What does Jeff Bezos do before he goes to sleep?
            He puts his PJ-Amazon`,
            `What happened when the world's tongue-twister champion got arrested?
            They gave him a tough sentence`,
            `What did the mama cow say to the calf?
            It’s pasture bedtime`,
            `How does a vampire start a letter?
            Tomb it may concern`,
            `What do you call an illegally parked frog?
            Toad`,
            `What did one plate say to the other?
            Dinner is on me`,
            `Why do hummingbirds hum?
            Because they don’t know the words`,
            `What do sprinters eat before a race?
            Nothing. They fast`,
            `Two muffins are baking in an oven. One of them looks to the other and says, "Phew, it's getting hot in here" The other looks back and says, "Ack A talking muffin"
            Animal Jokes for Kids`,
            `What do cats eat for breakfast?
            Mice Crispies`,
            `What do you call an elephant that doesn’t matter
            An irrelephant`,
            `What do you get when you cross a rabbit with shellfish?
            An oyster bunny`,
            `Where do polar bears keep their money
            In a snow bank`,
            `Why did the pony get sent to his room?
            He wouldn’t stop horsing around`,
            `What kind of dog does a magician have?
            A Labracadabrador`,
            `Where do cows go on Friday nights?
            They go to the moo-vies`,
            `Why couldn't the pony sing “Happy Birthday?
            Because she was just a little hoarse`,
            `How do you make an octopus laugh?
            With ten-tickles`,
            `How do you keep a bull from charging?
            Take away its credit card`,
            `Why can’t a leopard hide
            Because he’s always spotted`
        ]

        let jokesArea = document.getElementById('jokesArea');
        let rand = Math.floor(Math.random() * jokesArray.length);
        jokesArea.innerHTML = jokesArray[rand];
    }
}



