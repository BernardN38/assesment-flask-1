### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?
  python has a larger standard library, javascript is the language of the browser

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming
  crashing.
  dictionary.get('c')
  or
  try:
    dict_1['c']
  except:
    print(False)

- What is a unit test?
- a test on a specific component of a application, such as a function

- What is an integration test?
- test on a module when integrated into the system

- What is the role of web application framework, like Flask?
- To facilitate the building of web applications by providing tools that make it more efficient, realible and testable. 
  
- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?

  URL variable is useful to identify a resource. To sort or filter items you should use query parameter. 

- How do you collect data from a URL placeholder parameter using Flask?
- app.get('/path/<parameter>')

- How do you collect data from the query string using Flask?
- request.args

- How do you collect data from the body of the request using Flask?
- request.form

- What is a cookie and what kinds of things are they commonly used for?
- a cookies is a key value pair that is saved in the browser and sent everytime a request is made

- What is the session object in Flask?
- storage that us useful for a single session of use, and is deleted after

- What does Flask's `jsonify()` do?
- it is a helper funciton to properly return Json data
