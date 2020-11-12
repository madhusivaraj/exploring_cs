import os 

def main(): 
    for count, filename in enumerate(os.listdir("./assets/debrief/Final Project/")): 
        dst = filename.replace("Final Project.0","")
        src ='./assets/debrief/Final Project/'+ filename 
        dst ='./assets/debrief/'+ dst 

        print(dst)
        os.rename(src, dst)
  
 
if __name__ == '__main__': 
    main() 