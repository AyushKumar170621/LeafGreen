const nutritionalInfo = {
    tomato: {
        calories: 20,
        vitamins: 'A, C',
        minerals: 'Potassium, Calcium',
        description: 'A juicy and nutritious red tomato...',
    },
    potato: {
        calories: 30,
        vitamins: 'B6, C',
        minerals: 'Potassium, Iron',
        description: 'Fresh and organic potatoes for your daily meals...',
    },
    // Add more vegetables and their nutritional information
    };
    $(document).ready(function() {
        // Attach a click event to the "More Details" buttons
        $('.store-overlay a.btn-primary').click(function(e) {
            e.preventDefault();
            // Get the vegetable name (e.g., "tomato") from the parent store item
            const vegetable = $(this).closest('.store-item').data('vegetable');
            // Get the nutritional information for the selected vegetable
            const info = nutritionalInfo[vegetable];
            // Update the modal content with nutritional information
            $('#nutritionalDetails').html(`
                <strong>Calories:</strong> ${info.calories} kcal<br>
                <strong>Vitamins:</strong> ${info.vitamins}<br>
                <strong>Minerals:</strong> ${info.minerals}<br>
                <strong>Description:</strong> ${info.description}
            `);
            // Show the modal
            $('#nutritionalModal').modal('show');
        });
    });