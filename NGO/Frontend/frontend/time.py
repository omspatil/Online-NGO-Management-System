import matplotlib.pyplot as plt
import numpy as np

# Create figure and axis with a professional size ratio
fig, ax = plt.subplots(figsize=(16, 8))

# Project data
tasks = [
    "Project Initialization",
    "Requirement Gathering",
    "Design and Prototyping",
    "Development",
    "Testing and Debugging",
    "Deployment and Documentation"
]

# Task data - Modified last task duration to 1 month
start_dates = np.array([0, 0, 1, 2, 3, 4])  # 0 = August
durations = np.array([1, 2, 2, 2, 2, 1])    # Changed last duration to 1
end_dates = start_dates + durations

# Modern color palette
colors = ['#3498db', '#2ecc71', '#e74c3c', '#9b59b6', '#f1c40f', '#1abc9c']

# Create bars
for i, task in enumerate(tasks):
    # Plot the bar
    bar = ax.barh(i, durations[i], left=start_dates[i], 
                  color=colors[i], alpha=0.8, 
                  edgecolor='white', height=0.3,
                  zorder=10)
    
    # Add task labels
    ax.text(start_dates[i] - 0.1, i, task,
            ha='right', va='center',
            fontsize=10, fontweight='bold',
            color='#2c3e50')
    
    # Add duration indicator
    ax.text(start_dates[i] + durations[i]/2, i,
            f'{int(durations[i])} months',
            ha='center', va='center',
            color='white', fontweight='bold',
            fontsize=9, zorder=15)

# Customize the chart appearance
plt.title('NGO Verification & Management System Development Timeline\n2024-2025', 
         pad=20, fontsize=16, fontweight='bold', color='#2c3e50')

# Set up the months on x-axis
months = ['August', 'September', 'October', 'November', 'December', 'January']
plt.xticks(range(6), months, rotation=0, fontsize=10, color='#2c3e50')
plt.yticks([])

# Add gridlines
plt.grid(axis='x', linestyle='--', alpha=0.3, color='gray')

# Enhance the layout
plt.xlabel('Project Timeline (2024-2025)', fontsize=12, color='#2c3e50', labelpad=10)

# Remove unnecessary spines
ax.spines['right'].set_visible(False)
ax.spines['left'].set_visible(False)
ax.spines['top'].set_visible(False)
ax.spines['bottom'].set_color('#bdc3c7')

# Set background color
ax.set_facecolor('#f9f9f9')
fig.patch.set_facecolor('#ffffff')

# Add project phase indicators
for i in range(len(tasks)):
    ax.axhline(y=i, color='#ecf0f1', linestyle='-', zorder=1, alpha=0.5)

# Adjust layout
plt.tight_layout()

# Add footer
plt.figtext(0.99, 0.01, 'NGO Management System', 
            ha='right', va='bottom', 
            fontsize=8, color='#95a5a6')

# Show plot
plt.show()