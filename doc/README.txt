=========================================
 Project Requirement for Personal Diary
=========================================
 Projective Objective
    [ ] - Componentize for production streamlining.


 Layout Objective
    [ ] - Cross Browser [Edge, Chrome, Firefox, Opera, Safari]
    [ ] - Cross Devices [IOS, Andriod, Desktop]
    [ ] - Responsive
    

 Learning Objective
    [ ] - Effective use of Bootstrap
    [ ] - Familiarize with React and its advance features
    [ ] - Complete full development Cycle
	     Development -> Production -> Build -> Serve -> Deployment




Application
   [ ] - Homepage 
      [x] - Navigation
         [x] - Route
            [ ] - Log in?
               [x] - Validation
               [o] - HTTP Post Request  - Did not work, because I have no backend services
                  

                     [ ] - Diary Application

            [x] - Log out?
               [x] - Content -> [ ] - Sales Page
               [x] - Registration 
                  [x] - Validation
                  [x] - Use LocalStorage to store username/password
                  [x] - Use encryption on the password
                  [x] - ItemID - userList                            || Filter Local Storage Keys <scribbliator-v-username>
                  [x] - ItemID - scribbliator-<version>-<username>   || { 'u' : 'admin', 'p' : <encrypted password> }
                  [x] - ItemID - userToken                           || <recordID>

                  [x] - $ST {
                           username     : 'admin',
                           password     : '123456',
                           email        : '111@hotmail.com',
                           date-created : 2020-01-01,
                        }

                  [ ] - On Registration Check if username && email is duplicate




 Local Storage Login Setup
 ====================================================
    Item ID | Records 
 ====================================================

    Item ID - scribbliator-v1-