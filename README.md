# Dog Adoption Plan

## SupaBase Table

X columns: name, age, breed, bio, image
X start with 4 dogs
X add key/URL as secrets

## Views

-Home
-Dog Detail
-Edit
-New

## Components

-header
-dogForm for new and edit views(fetch-insert)

## Routes

/home
/dogs/:id
/dogs/:id/edit
/dogs/new

## Order of Operations (work vertically!)

Xset up supabase table
-fetch dogList and display on Home
-set up Route to home
-fetch Dogdetails and display on dogdetail page
-set up route to dogDetails
-build dog form (new)
-set up error (try/catch)
-fetch function for new (insert)
-add route for new
-build edit function
-css as needed

## Rubric

Deployed on Netlify, PR open with preview deploy 1
DogList component
rendered by home 1
calls supabase in a useEffect and sets the result in state 1
has a loading state 1
renders list of dogs 1
links to each dog’s detail page 1
DogDetail component
rendered by /dogs/:id 1
calls supabase in a useEffect and sets the result in state 1
has a loading state 1
renders dog details 1
New view
Linked from a nav bar 1
Shows a form for adding dog information 1
User can add dogs to the database and see a success message 1
User sees an error message if the supabase request fails 1
EditDog view
Linked from the Detail view 1
Shows the pre-filled form for editing the dog’s information 1
User can edit dog’s information and see a success message 1
User sees an error message if the supabase request fails 1
Deleting Dogs
User can delete the dog from its detail page 1
User is redirected back to the home page after successful deletion 1
