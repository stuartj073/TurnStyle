
# Testing 
## Responsiveness
- I used the DevTools off Google Chrome to check for the responsiveness on all screen sizes. I created a table to reflect the results of each different screen size.
![GitHub Logo](/readme-files/responsiveness'.png)
![GitHub Logo](/readme-files/responsiveness-pages.png)


## Code Validators
HTML Validator (https://validator.w3.org/)

- Home Page
![GitHub Logo](/readme-files/index.html-validator-results.png)

- About Page
![GitHub Logo](/readme-files/about.html-validator-results.png)

- Deals Page
![GitHub Logo](/readme-files/deals.html-validator-results.png)

- Forms Page
![GitHub Logo](/readme-files/form.html-validator-results.png)

## Testing User Stories
- As a first time visitor, I want to get a concrete understanding of the main function of the website and what I can do as a customer.
Upon entering the website, the user is met with a site logo and title along with a small message that reads:
"TurnStyle. Helping brick and mortar music emporiums during distressing times." Underneath this any further queries a first time
visitor might have are made abundantly clear as each of the three sections describe in detail what the website is all about.

- As a first time visitor, I want to be easily able to navigate throughout the website to the various sections and pages.
The header element allows for easy navigation through to whatever page a prospective customer might want to head on to.
Each page is given a simple but concise name to explain fully what it is each page offers.

- As a first time visitor, I want to be met with neat, presentable looking website that has a structure that makes sense to the overall page.
Each page is structured in a coherent manner and only a small number of colors are used throughout the site so as not to present
the user with an overload of different textures. The colors chosen were done so as to not impair visibility of the site's main features.

- As a record store owner, I want to see what the website/company can offer my business to help it reach out to new audiences,
For the ideal customer (i.e the record store owner), the Deals page follow's up on the basic information provided on the landing page
with details behind each plan along with their financial cost.

- As an artist/record store owner, I want to see that other customer's have had success in using the service.
A section detailing quote's from fictional customers shows how much of an impact TurnStyle has made on their business'
thus showing any potential customer's that going into business with TurnStyle may be a safe bet.

- As an artist/record store owner, I want to be able to contact the business owner as easily as possible.
The cover of the page has a button that links the user to the contact/form page. The site footer also allows for
the customer to be linked to the social media accounts of the website.

- As an artist/record store owner, I want to be able to identify the different options at my disposal for advertising my business.
Clicking on to the 'Deal's' page outlines what options a user can avail from and at which cost.

- As an owner, I want to push my websites main ethos to the customer in the cover section of the website.
The main feeling/ mission statement is made known to the valuable customer on the site photo.

## Bugs
- To make the website as responsive as possible, I wanted to include a burger icon to allow for the menu dropdown option for smaller device sizes.
This was something I had struggled with as I wanted to include a slick design from a video on youtube. 
- The issue was to do with the file paths to the 'app.js' file. As soon as I started thinkering around with the source code within the script tag in the body element I soon found out what had been the issue preventing the burger menu from functioning properly.
- An issue that crept up on all pages throughout passing through their respective set of coding was the concept of the button.
This issue was essentially to do with the fact that to have a button cannot have the 'a' hyperlink tag as it's immediate descendent. This issue was resolved by leaving out the button element entirely and instead creating a specific class that would tackle a div element in order to allow for the 'a' hyperlink to prompt users to the home page.
![GitHub Logo](/readme-files/css-issues.png).
- A second issue that wasn't necessarily a technical or code issue but rather the documentation of the code itself through my commit messages. At the beginning of the project I was making very large commits with various different issues and tasks being solved 
and reported into one commit. Upon a meeting with my tutor this commit issue was made known and from then on I begun to restrict my commit's to more single and concise methods of reporting each operation I had been working on.
