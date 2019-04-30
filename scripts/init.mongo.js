

// Connect to the issuetracker database. Note, if the issuetracker database
// does not exist, it will create it with this call.
db = new Mongo().getDB('JournalZ');

// Next, we remove everything inside it. This is helpful to ensure that the
// database starts from a known state.
db.entries.remove({});

// Now, we insert some mock data that mirrors the data that we have in the
// in-memory version of the `server.js` code.
db.entries.insert(
[
    {
      title: 'Existing Journal Entry',
      date: new Date('2019-05-02'),
      current_text: "This is an example entry. Look at all this fun text. Try to edit me."
    },
    {
      title: 'A New Year',
      date: new Date('2019-01-01'),
      current_text: "New Year is the time or day at which a new calendar year begins and the \
      calendar's year count increments by one. \
      Many cultures celebrate the event in some manner and the 1st day of January is often \
      marked as a national holiday. \
      In the Gregorian calendar, the most widely used calendar system today, New Year occurs \
      on January 1 (New Year's Day). This was also the case both in the Roman calendar (at \
      least after about 713 BC) and in the Julian calendar that succeeded it. \
      Other calendars have been used historically in different parts of the world; some \
      calendars count years numerically, while others do not. \
      During the Middle Ages in western Europe, while the Julian calendar was still in use, \
      authorities moved New Year's Day, depending upon locale, to one of several other days, \
      including March 1, March 25, Easter, September 1, and December 25. Beginning in 1582, \
      the adoptions of the Gregorian calendar and changes to the Old Style and New Style dates \
      meant the various local dates for New Year's Day changed to using one fixed date, January 1."
    },
    {
      title: 'Why I Love Potatoes',
      date: new Date('2019-01-31'),
      current_text: "The potato is a starchy, tuberous crop from the perennial nightshade \
      Solanum tuberosum. In many contexts, potato refers to the edible tuber, but it can \
      also refer to the plant itself. Common or slang terms include tater, tattie and \
      spud. Potatoes were introduced to Europe in the second half of the 16th century by \
      the Spanish. Today they are a staple food in many parts of the world and an integral \
      part of much of the world's food supply. As of 2014, potatoes were the world's \
      fourth-largest food crop after maize (corn), wheat, and rice. \
      Wild potato species can be found throughout the Americas, from the United States \
      to southern Chile. The potato was originally believed to have been domesticated \
      independently in multiple locations, but later genetic testing of the wide variety \
      of cultivars and wild species traced a single origin for potatoes. In the area of \
      present-day southern Peru and extreme northwestern Bolivia, from a species in the \
      Solanum brevicaule complex, potatoes were domesticated approximately 7,000–10,000 \
      years ago. In the Andes region of South America, where the species is \
      indigenous, some close relatives of the potato are cultivated. \
      Following millennia of selective breeding, there are now over 1,000 different types \
      of potatoes. Over 99% of presently cultivated potatoes worldwide descended from \
      varieties that originated in the lowlands of south-central Chile, which have \
      displaced formerly popular varieties from the Andes. \
      The importance of the potato as a food source and culinary ingredient varies by \
      region and is still changing. It remains an essential crop in Europe, especially \
      eastern and central Europe, where per capita production is still the highest in the \
      world, while the most rapid expansion in production over the past few decades has \
      occurred in southern and eastern Asia, with China and India leading the world in \
      overall production as of 2014."
    },
    {
      title: 'Worst Valentine\'s Day Ever',
      date: new Date('2019-02-14'),
	    current_text: "Valentine's Day, also called Saint Valentine's Day or the Feast of Saint \
      Valentine, is celebrated annually on February 14. It originated as a Western Christian \
      feast day honoring one or two early saints named Valentinus. Valentine's Day is \
      recognized as a significant cultural, religious, and commercial celebration of romance \
      and romantic love in many regions around the world, although it is not a public holiday \
      in any country. \
      There are numerous martyrdom stories associated with various Valentines connected to \
      February 14, including a written account of Saint Valentine of Rome's imprisonment for \
      performing weddings for soldiers who were forbidden to marry and for ministering to \
      Christians persecuted under the Roman Empire. According to legend, Saint Valentine \
      restored sight to the blind daughter of his judge, and he wrote her a letter signed \
      'Your Valentine' as a farewell before his execution. \
      The Feast of Saint Valentine was established by Pope Gelasius I in AD 496 to be celebrated \
      on February 14 in honour of the Christian martyr, Saint Valentine of Rome, who died on that \
      date in AD 269. The day first became associated with romantic love within the circle \
      of Geoffrey Chaucer in the 14th century, when the tradition of courtly love flourished."
    },
    {
      title: 'Blarney Blowout',
      date: new Date('2019-03-17'),
      current_text: "UMass Amherst is working to ensure the upcoming Blarney Blowout doesn't \
      spiral out of control. \
      Five years ago, the UMass Blarney Blowout turned into a riot where police had to use \
      pepper spray on students. \
      This year the university has a concert planned for students and a hockey game later \
      in the day. \
      Now, he and other students said the event doesn't live up to it's prior reputation \
      thanks to heightened attention from UMass Amherst officials and law enforcement. \
      'I feel like all five towns have their cops here on that day to make it safe,' he noted. \
      For the weekend of March 17, the school is barring dorm guests from other colleges and \
      the same goes for their concert in the Mullins Center featuring Future, Gunna and Ty \
      Dolla Sign. \
      'I'm glad that the concert's there, but I would prefer it later in the day, it would be\
      more fun,' said Sam the Minuteman. \
      'I do know a lot of other people in different friend groups that are going to be going \
      out to the bars,' he said. \
      He said even those students over 21 recognize the school's efforts to make the weekend \
      pass without major incident. \
      'There's a couple different options this year. As a senior and kind of being here, just \
      trying to be safe and be more considerate of what has happened in the past,' Sam continued."
    },
    {
      title: 'An Ordinary Thursday',
      date: new Date('2019-04-04'),
      current_text: "Today I woke up. Then I ate some breakfast. I had a banana and toast. Then\
      I went to my morning class that started at 10am. Then I had some lunch at Blue Wall. Then\
      I went home and watched some Netflix and decided to write in this journal. Next I will go\
      to my afternoon class. Then I will eat dinner and go home again. Then I will hangout with\
      my friends. Then I will go to sleep. It will be a good Thursday."
    }
] );

// Lastly, we create "indexes" to make searching faster. For this particular
// application we know that searching on the status, owner, and created properties
// will be common, so we create indexes on those.
db.entries.createIndex({ title: 1 });
db.entries.createIndex({ date: 1 });
db.entries.createIndex({ id: 1 });