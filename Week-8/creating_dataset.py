import os
import json

def create_dataset_json(base_path):
    dataset = {}
    categories = [d for d in os.listdir(base_path) if os.path.isdir(os.path.join(base_path, d))]
    for category in categories:
        images = os.listdir(os.path.join(base_path, category))
        dataset[category] = [os.path.join(category, img) for img in images if img.endswith(('.png', '.jpg', '.jpeg'))]
    
    with open(os.path.join(base_path, 'dataset.json'), 'w') as f:
        json.dump(dataset, f, indent=4)

create_dataset_json('Week 8 - Creating our datasets/datawalk')
