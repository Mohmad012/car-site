from PIL import Image
import os

yor_size = int(input('Enter Size :  '))

output_folder = input('Enter Output Folder Name :  ')

if not os.path.exists(output_folder):
    os.mkdir(output_folder)

for filename in os.listdir('.'):
    if not filename.endswith((".png", "jpg", "jpeg")):
        continue

    ## open image ---> get image size ---> resize
    image = Image.open(filename)
    width , height = image.size

    if width > yor_size and height > yor_size : ## image should be greated than the yor size
        if width > height :
            height = int((yor_size/width)*height)
            width = yor_size

        else:
            width = int((yor_size/height)*width)
            height = yor_size

        image = image.resize((width , height))
        print('resizing  : %s ' %(filename))

    image = image.save(os.path.join(output_folder , filename))

    print('----------------------------------------------------')

print('Done Resizing All Images')
