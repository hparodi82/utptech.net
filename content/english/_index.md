---
###################### hero slider ###########################
slider:
  enable : true
  slider_item:
  # slider item loop
  - bg_image : images/banner/banner-home-1.jpg
    animation_from : left
    subtitle : Empowering Your Vision
    title : Technology That Works for You
    content : Always Up To Par, Always Ahead.
    pagination_icon : ti-comments # themify icon pack : https://themify.me/themify-icons
    pagination_name : About
    button:
      enable : true
      label: More details
      link : "about/"
      
  # slider item loop
  - bg_image : images/banner/banner-it-consulting-1.jpg
    animation_from : up
    subtitle : Services We Offer
    title : Smart IT Solutions, Delivered
    content : Structured Cabling, Managed IT, Cloud, Cybersecurity & more — we bring scalable, secure tech services to power your growth.
    pagination_icon : ti-bar-chart # themify icon pack : https://themify.me/themify-icons
    pagination_name : Services
    button:
      enable : true
      label: More details
      link : "service/"
      
  # slider item loop
  - bg_image : images/banner/banner-industries-3.jpg
    animation_from : down
    #subtitle : Start your
    title : Your Vision. Our Tech.
    content : Build a smarter future with Up to Par Technologies. From structured cabling to managed IT services, <br>
      we empower organizations to grow with confidence through secure, scalable, and strategic tech solutions.
    pagination_icon : ti-money # themify icon pack : https://themify.me/themify-icons
    pagination_name : Industries
    button:
      enable : true
      label: More details
      link : "Industries/"
      
  # slider item loop
  - bg_image : images/banner/banner-contact-us-5.jpg
    animation_from : right
    subtitle : Get in Touch
    title : Contact Us Today
    content : Whether you need a network overhaul, structured cabling, or expert IT support,  
      Up To Par Technologies is here to help. Reach out and let's build something reliable together.
    pagination_icon : ti-package # themify icon pack : https://themify.me/themify-icons
    pagination_name : Contact Us
    button:
      enable : true
      label: More details
      link : "contact/"

########################################## Service ####################################
service:
  enable : true
  title: "Service We Provide"
  subtitle: "Best Service"
  section: "service" # showing items from service section
  # service item comes from "content/service" folder
########################################## Service ####################################
  # idustry:
  #   enable : true
  #   title: "Industries We Service"
  #   subtitle: "Best Service"
  #   section: "industry" # showing items from service section
  #   # service item comes from "content/service" folder
######################################## About #########################################
about:
  enable : true
  bg_image : "images/background/about-bg.jpg"
  title : "Industries We Serve."
  #subtitle: "Tailored Technology for Every Field"
  content : "At **Up to Par Technologies**, we specialize in delivering scalable, secure, and customized IT solutions across a variety of industries. Whether you're in **healthcare, dental, vision care, education, or small business operations**, we understand that each sector has its own unique challenges—and we build technology systems that meet those demands head-on."
  # bullet point
  bullet_point:
  - "Medical Clinics & Healthcare Facilities"
  - "Dental Practices & DSOs"
  - "Optometry & Vision Care Centers"
  - "Educational Institutions"
  - "Small & Medium Businesses"
  - "Enterprises"
  - "Hopitality"
  - "Restaurants"
  button:
    enable : true
    label : "Explore More"
    link : "about/"

##################################### Skill ##############################################
# skill:
#   enable : false
#   subtitle : Our Skills
#   title : Why Choose Us
#   content: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt laboris nisi ut aliquip ex ea commodo consequat. <br><br> Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint ocaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum. sed perspiciatis unde omnisiste natus error sit voluptatem accusantium.doloremque ladantium totam rem aperieaque ipsa quae ab illo inventore.veritatis. et quasi architecto beatae vitae dicta sunt explicabo.
#   # funfacts
#   funfacts :
#   - icon : ti-server # themify icon pack : https://themify.me/themify-icons
#     title : Projects Done
#     count : 230
#     
#   - icon : ti-face-smile # themify icon pack : https://themify.me/themify-icons
#     title : Satisfied Clients
#     count : 789
#     
#   - icon : ti-thumb-up # themify icon pack : https://themify.me/themify-icons
#     title : Cup Of Coffee
#     count : 580

  # # progressbar
  # progressbar : 
  # - title : Branding
  #   progress : 85%
  #   
  # - title : Consulting
  #   progress : 90%
  #   
  # - title : Business
  #   progress : 75%
  #   
  # - title : Promotion
  #   progress : 90%
  # 
########################################## industry ####################################
  # industry:
  #    enable : true
  #    title: "Industries We Serve"
  #    subtitle: "Our Works"
  #    section: "industry" # showing items from project section
     # project item comes from "content/project" folder   
########################################## project ####################################
# project:
#   enable : true
#   title: "Industries We Serve"
#   subtitle: "Our Works"
#   section: "project" # showing items from project section
#   # project item comes from "content/project" folder
########################################### Mission ###################################
# mission:
#   enable : true
#   subtitle : Our Goal
#   title : Company Mission
#   content : Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor didunt laboris nisi ut aliquip ex ea commodo consequat.
#   image : images/mission.jpeg
#   accordion:
#   - title : Our Company Mission
#     description : Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur.Excepteur sint ocaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.
#     
#   - title : Our Company Vision
#     description : Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur.Excepteur sint ocaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.
#     
#   - title : Our Company Goal
#     description : Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur.Excepteur sint ocaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.

##################################### Promo video ####################################
# promo_video:
#   enable : false
#   title : "We Are Alawys <br> Comited"
#   bg_image : "images/background/promo-video.jpg"
#   video_URL : "https://www.youtube.com/embed/ResipmZmpDU"
#   video_title : "Lorem ipsum dolor <br> sit amet con."

##################################### call to action #################################
# testimonial:
#   enable : false
#   subtitle : Clients
#   title : What client Say
#   image : images/client.png
#   testimonial_item :
#   - name : Julia Robertson
#     content : Lorem ipsum dolor sit amet constur adipisicing elit sed eiusmtempor incid sed dolore magna aliqu enim minim veniam quis nostrud exercittion ullamco labo ris nisi aliquip excepteur.
#     designation : Happy Clients
#     
#   - name : Julia Robertson
#     content : Lorem ipsum dolor sit amet constur adipisicing elit sed eiusmtempor incid sed dolore magna aliqu enim minim veniam quis nostrud exercittion ullamco labo ris nisi aliquip excepteur.
#     designation : Happy Clients
#     
#   - name : Julia Robertson
#     content : Lorem ipsum dolor sit amet constur adipisicing elit sed eiusmtempor incid sed dolore magna aliqu enim minim veniam quis nostrud exercittion ullamco labo ris nisi aliquip excepteur.
#     designation : Happy Clients

##################################### call to action #################################
call_to_action:
  enable : true
  bg_image : "images/background/cta.jpg"
  title : "Up To Par Technologies give you the smart solutions for your business"
  button:
    enable : true
    label : "get a quote"
    link : "contact/"
      
########################################## blog ####################################
# blog:
#   enable : false
#   title: "Company News"
#   subtitle: "Latest News"
#   section: "blog"
#   # blog item comes from "content/blog" folder
  
################################ clints logo slider ################################
# clients_logo_slider:
#   enable : false
#   client_logos:
#   - logo: "images/client-logo/client-logo-1.png"
#     link: "#"
# 
#   - logo: "images/client-logo/client-logo-2.png"
#     link: "https://examplesite.com"
# 
#   - logo: "images/client-logo/client-logo-3.png"
#     link: "#"
# 
#   - logo: "images/client-logo/client-logo-4.png"
#     link: "https://examplesite.com"
# 
#   - logo: "images/client-logo/client-logo-5.png"
#     link: "#"
# 
#   - logo: "images/client-logo/client-logo-3.png"
#     link: "https://examplesite.com"
# 
#     
---
