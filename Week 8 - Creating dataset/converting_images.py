import os
import pyheif
from PIL import Image

def convert_heic_to_jpg(heic_path, output_path):
    # Read the HEIC file
    heif_file = pyheif.read(heic_path)
    
    # Convert to a PIL image
    image = Image.frombytes(
        heif_file.mode, 
        heif_file.size, 
        heif_file.data,
        "raw",
        heif_file.mode,
        heif_file.stride,
    )
    
    # Save the image as a JPG file
    image.save(output_path, "JPEG")

def convert_folder(input_folder, output_folder):
    # Create the output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Loop through all files in the input folder
    for filename in os.listdir(input_folder):
        if filename.lower().endswith(".heic"):
            input_path = os.path.join(input_folder, filename)
            output_path = os.path.join(output_folder, filename.replace(".heic", ".jpg"))
            convert_heic_to_jpg(input_path, output_path)
            print(f"Converted {filename} to JPG.")

# Example usage
convert_folder("path_to_input_folder", "path_to_output_folder")
