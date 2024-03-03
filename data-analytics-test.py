import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Generate random healthcare-related data
np.random.seed(42)
data = {
    'PatientID': np.arange(1, 101),
    'Age': np.random.randint(18, 80, size=100),
    'BloodPressure': np.random.randint(90, 140, size=100),
    'Cholesterol': np.random.randint(120, 300, size=100),
    'HeartRate': np.random.randint(60, 100, size=100),
    'ServiceUsed': np.random.choice(['Ambulance', 'Pharmacy', 'Hospital', 'PalliativeCare'], size=100),
}

df = pd.DataFrame(data)

# Display the first few rows of the DataFrame
print(df.head())

# Analytics 1: Age Group Distribution
plt.figure(figsize=(12, 4))
sns.histplot(df['Age'], bins=20, kde=True)
plt.title('Age Group Distribution')
plt.xlabel('Age')
plt.ylabel('Count')
plt.show()

# Analytics 2: Number of People Using Services
service_counts = df['ServiceUsed'].value_counts()
plt.figure(figsize=(8, 6))
service_counts.plot(kind='bar', color='skyblue')
plt.title('Number of People Using Services')
plt.xlabel('Service Type')
plt.ylabel('Number of People')
plt.show()

# Analytics 3: Popular Palliative Care and Hospital Centers
palliative_care_counts = df[df['ServiceUsed'] == 'PalliativeCare']['HospitalName'].value_counts().head(5)
hospital_counts = df[df['ServiceUsed'] == 'Hospital']['HospitalName'].value_counts().head(5)

# Assuming you have a 'HospitalName' column in your data
plt.figure(figsize=(12, 6))
plt.subplot(1, 2, 1)
palliative_care_counts.plot(kind='bar', color='green')
plt.title('Popular Palliative Care Centers')
plt.xlabel('Center Name')
plt.ylabel('Number of Users')

plt.subplot(1, 2, 2)
hospital_counts.plot(kind='bar', color='blue')
plt.title('Popular Hospitals')
plt.xlabel('Hospital Name')
plt.ylabel('Number of Users')

plt.tight_layout()
plt.show()

# Analytics 4: Health Analytics
plt.figure(figsize=(12, 8))

# Blood Pressure Distribution
plt.subplot(2, 2, 1)
sns.histplot(df['BloodPressure'], bins=20, kde=True)
plt.title('Blood Pressure Distribution')

# Cholesterol Distribution
plt.subplot(2, 2, 2)
sns.histplot(df['Cholesterol'], bins=20, kde=True)
plt.title('Cholesterol Distribution')

# Heart Rate Distribution
plt.subplot(2, 2, 3)
sns.histplot(df['HeartRate'], bins=20, kde=True)
plt.title('Heart Rate Distribution')

plt.tight_layout()
plt.show()
