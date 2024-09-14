const chatBody = document.getElementById("chat-body");
let lastResponse = '';
let askingForTips = false;
let askingForExercise = false;

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    displayMessage(userInput, "user-message"); 
    document.getElementById("user-input").value = "";

    if (askingForExercise) {
        provideExercise();
        askingForExercise = false;
    } else if (askingForTips) {
        provideTips();
        askingForTips = false;
    } else {
        setTimeout(() => {
            generateResponse(userInput);
        }, 1000);
    }
}

function displayMessage(text, className) {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${className}`;
    messageElement.innerText = text;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function generateResponse(input) {
    const normalizedInput = input.toLowerCase();
    let response;

    if (normalizedInput.includes("overthinking") || normalizedInput.includes("overthink")) {
        response = "Overthinking can be exhausting and may make problems feel bigger than they are. It might help to focus on one small step you can take, practice mindfulness, or distract yourself with an activity you enjoy. Would you like some tips on how to manage overthinking?";
        lastResponse = 'overthinking';

    } else if (normalizedInput.includes("depression") || normalizedInput.includes("feeling down")) {
        response = "Depression is tough and it's important to seek support. Talking to a therapist, maintaining a routine, or engaging in physical activity can help. Would you like some tips on managing depression?";
        lastResponse = 'depression';

    } else if (normalizedInput.includes("anxiety") || normalizedInput.includes("anxious")) {
        response = "Feeling anxious can be really challenging. Relaxation techniques like deep breathing, meditation, or progressive muscle relaxation may help. Would you like some tips on managing anxiety?";
        lastResponse = 'anxiety';

    } else if (normalizedInput.includes("lonely") || normalizedInput.includes("loneliness")) {
        response = "Loneliness can feel very isolating. Reaching out to friends or family, joining social groups, or engaging in community activities can help. Would you like some tips on dealing with loneliness?";
        lastResponse = 'loneliness';

    } else if (normalizedInput.includes("stress") || normalizedInput.includes("stressed")) {
        response = "Stress can affect both your body and mind. Techniques like time management, mindfulness, and regular exercise can help manage stress. Would you like some tips on how to manage stress?";
        lastResponse = 'stress';

    } else {
        response = "I'm here to listen. Please share more about what's on your mind or how you're feeling.";
        lastResponse = 'listening';
    }
    

    displayMessage(response, "bot-message");
}

function provideTips() {
    switch (lastResponse) {
        case 'overthinking':
            displayMessage("To manage overthinking, try writing down your thoughts, practicing mindfulness, or setting a specific 'worry time' each day where you allow yourself to think about your worries for a set time and then move on. Would you like a simple exercise to help with overthinking?", "bot-message");
            break;
        case 'depression':
            displayMessage("For managing depression, create a routine, set small achievable goals, engage in regular physical activity, and reach out to support networks. Small steps can make a big difference. Would you like a simple exercise to help with depression?", "bot-message");
            break;
        case 'anxiety':
            displayMessage("To manage anxiety, practice deep breathing exercises, try mindfulness or meditation, and consider regular physical activity. Breaking tasks into smaller steps can also help reduce feelings of anxiety. Would you like a simple exercise to help with anxiety?", "bot-message");
            break;
        case 'loneliness':
            displayMessage("Combating loneliness might involve reaching out to friends, joining clubs or groups with similar interests, or volunteering. Building connections can help you feel more engaged and less isolated. Would you like a simple exercise to help with loneliness?", "bot-message");
            break;
        case 'stress':
            displayMessage("For stress relief, engage in regular physical activity, practice relaxation techniques such as meditation, and make time for hobbies or activities you enjoy. Managing your time effectively can also help. Would you like a simple exercise to help with stress?", "bot-message");
            break;
        default:
            displayMessage("I’m here to help with any other questions or concerns you might have. Let me know how I can assist you.", "bot-message");
    }
    askingForExercise = true; // Prompt user for exercise
}

function provideExercise() {
    switch (lastResponse) {
        case 'overthinking':
            displayMessage("Try this exercise: Spend 5 minutes writing down your thoughts. Then, choose one small action you can take right now to address a worry. This can help break the cycle of overthinking and give you a sense of control.", "bot-message");
            break;
        case 'depression':
            displayMessage("Here's an exercise: Set a small, achievable goal for today and make sure to accomplish it. It could be as simple as taking a short walk or completing a small task. Celebrating these small victories can help improve your mood.", "bot-message");
            break;
        case 'anxiety':
            displayMessage("Try this exercise: Practice deep breathing for 5 minutes. Inhale deeply through your nose for a count of 4, hold for 4, and exhale slowly through your mouth for a count of 4. Repeat this a few times to help calm your nerves.", "bot-message");
            break;
        case 'loneliness':
            displayMessage("Here's an idea: Reach out to a friend or family member today, even if it's just to say hello. Building and maintaining connections can help reduce feelings of loneliness.", "bot-message");
            break;
        case 'stress':
            displayMessage("Try this exercise: Spend 10 minutes doing a relaxing activity you enjoy, like reading or listening to music. Make time for this regularly to help manage stress more effectively.", "bot-message");
            break;
        default:
            displayMessage("I’m here to help with any other questions or concerns you might have. Let me know how I can assist you.", "bot-message");
    }
    lastResponse = '';
}

function generateResponse(input) {
    const normalizedInput = input.toLowerCase();
    let response;

    if (normalizedInput.includes("overthinking") || normalizedInput.includes("overthink")) {
        response = "Overthinking can often spiral out of control, making minor issues feel overwhelming. It may be helpful to break down the problem into smaller, manageable parts. Engaging in mindfulness or physical activity can help you refocus. Would you like some tips on how to manage overthinking and exercises to regain control of your thoughts?";
        lastResponse = 'overthinking';

    } else if (normalizedInput.includes("depression") || normalizedInput.includes("feeling down")) {
        response = "Dealing with depression can be draining, and it’s important to remember that you don’t have to face it alone. Seeking help from friends, family, or professionals can provide relief. Simple steps like staying physically active or creating a daily routine can also make a difference. Would you like tips and exercises for managing depression?";
        lastResponse = 'depression';

    } else if (normalizedInput.includes("anxiety") || normalizedInput.includes("anxious")) {
        response = "Anxiety can be overwhelming and make it hard to focus on daily tasks. Sometimes, slowing down and practicing breathing techniques or grounding exercises can help ease that feeling of being overwhelmed. Would you like some tips on managing anxiety and exercises to reduce its impact?";
        lastResponse = 'anxiety';

    } else if (normalizedInput.includes("lonely") || normalizedInput.includes("loneliness")) {
        response = "Loneliness can make us feel isolated from the world. Engaging in social activities, even virtually, and connecting with loved ones can alleviate those feelings. Taking small steps to engage with others, like joining a community or hobby group, can also help. Would you like tips and exercises for dealing with loneliness?";
        lastResponse = 'loneliness';

    } else if (normalizedInput.includes("stress") || normalizedInput.includes("stressed")) {
        response = "Stress can negatively impact both your physical and mental health. Developing healthy coping strategies, such as relaxation techniques or organizing your time, can significantly reduce stress. Would you like some tips and exercises to manage stress better?";
        lastResponse = 'stress';

    } else if (normalizedInput.includes("cyber bullying")) {
        response = "Cyber bullying is incredibly harmful and can make you feel isolated. It's important to protect yourself by blocking the bully and reporting the abuse. Speaking to someone you trust can help relieve the emotional impact. Would you like tips and strategies to cope with the effects of cyber bullying?";
        lastResponse = 'cyber bullying';

    } else if (normalizedInput.includes("suicidal thoughts") || normalizedInput.includes("suicide")) {
        response = "If you're experiencing suicidal thoughts, it's crucial to reach out to someone immediately, whether it's a friend, family member, or professional. You are not alone, and help is available. Would you like tips for coping right now or to be connected to a professional for support?";
        lastResponse = 'suicidal thoughts';

    } else if (normalizedInput.includes("online blackmailing") || normalizedInput.includes("blackmail")) {
        response = "Online blackmailing is serious, and it’s important not to engage with the person. Collect evidence, report the situation, and reach out to authorities. Dealing with the emotional stress is also critical. Would you like tips on managing the emotional toll of online blackmailing?";
        lastResponse = 'online blackmailing';

    } else if (normalizedInput.includes("feeling low")) {
        response = "Feeling low is natural from time to time, but it’s important to take small steps to lift yourself back up. Engaging in activities that bring you joy or connecting with friends can make a big difference. Would you like tips and exercises to help improve your mood?";
        lastResponse = 'feeling low';

    } else if (normalizedInput.includes("guilt")) {
        response = "Guilt can be a heavy burden, and it’s important to understand that everyone makes mistakes. Self-forgiveness is key to moving forward. Reflecting on the source of your guilt and learning from it can help you grow. Would you like some tips on how to deal with guilt and exercises to release it?";
        lastResponse = 'guilt';

    } else if (normalizedInput.includes("helpless")) {
        response = "Feeling helpless can make everything seem unmanageable. Sometimes, focusing on small actions can bring a sense of control. Taking things one step at a time and acknowledging your efforts can make a big difference. Would you like tips and exercises to regain control?";
        lastResponse = 'helpless';

    } else if (normalizedInput.includes("anger")) {
        response = "Anger can often cloud judgment and lead to decisions we may regret. Learning how to manage it effectively can help you react more calmly in stressful situations. Would you like some tips and exercises to control and manage anger better?";
        lastResponse = 'anger';

    } else if (normalizedInput.includes("worthless")) {
        response = "Feeling worthless is painful and often untrue. You have value, and recognizing your strengths can help you feel better about yourself. It may help to engage in activities that reinforce your self-worth. Would you like some tips and exercises to improve your self-esteem?";
        lastResponse = 'worthless';

    } else {
        response = "I'm here to listen. Please share more about what's on your mind or how you're feeling.";
        lastResponse = 'listening';
    }

    displayMessage(response, "bot-message");
}

function provideTips() {
    switch (lastResponse) {
        case 'overthinking':
            displayMessage("Overthinking can be managed by setting aside specific 'worry times' to deal with your thoughts. Engage in mindfulness activities, and try journaling to capture and release your thoughts. Would you like to try a few exercises?", "bot-message");
            break;
        case 'depression':
            displayMessage("Managing depression requires small, consistent actions like maintaining a routine and setting achievable goals. Physical activity and connecting with support systems are helpful. Would you like to try some exercises?", "bot-message");
            break;
        case 'anxiety':
            displayMessage("Deep breathing, progressive muscle relaxation, and grounding techniques are effective for managing anxiety. Breaking tasks into small steps can help. Would you like some exercises to help reduce your anxiety?", "bot-message");
            break;
        case 'loneliness':
            displayMessage("To combat loneliness, try joining social groups or reaching out to loved ones. Even small interactions can make a big difference. Would you like some exercises to help reduce feelings of loneliness?", "bot-message");
            break;
        case 'stress':
            displayMessage("Effective stress management involves regular exercise, mindfulness practices, and maintaining a balanced schedule. Would you like to try some exercises for stress relief?", "bot-message");
            break;
        case 'cyber bullying':
            displayMessage("It's important to document all incidents, block the bully, and seek support from trusted people. Would you like strategies to emotionally cope with cyber bullying?", "bot-message");
            break;
        case 'suicidal thoughts':
            displayMessage("It's critical to reach out for help immediately if you're feeling suicidal. You can talk to a loved one or a professional. Would you like coping strategies or help connecting with someone?", "bot-message");
            break;
        case 'online blackmailing':
            displayMessage("Don't interact with the blackmailer. Collect evidence, report it to the authorities, and talk to someone you trust. Would you like support on handling the emotional side of this situation?", "bot-message");
            break;
        case 'feeling low':
            displayMessage("Try engaging in activities you once enjoyed or reaching out to a friend. Small acts of self-care can also improve your mood. Would you like some exercises to lift your spirits?", "bot-message");
            break;
        case 'guilt':
            displayMessage("Reflecting on your actions and learning from your mistakes is important. Self-forgiveness is key to overcoming guilt. Would you like some exercises to help you work through guilt?", "bot-message");
            break;
        case 'helpless':
            displayMessage("Focus on small, manageable tasks that bring you a sense of accomplishment. Slowly, you'll regain a sense of control. Would you like some exercises to help you feel empowered?", "bot-message");
            break;
        case 'anger':
            displayMessage("Taking time to cool down, practicing deep breathing, and walking away from a situation can help manage anger. Would you like some exercises to help channel and manage your anger?", "bot-message");
            break;
        case 'worthless':
            displayMessage("Remind yourself of your past achievements, no matter how small. Engaging in activities that make you feel valued can improve your self-esteem. Would you like some exercises to help with feelings of worthlessness?", "bot-message");
            break;
        default:
            displayMessage("I'm here to help with anything else. Let me know how I can assist.", "bot-message");
    }
    askingForExercise = true; // Prompt user for exercise
}

function provideExercise() {
    switch (lastResponse) {
        case 'overthinking':
            displayMessage("1. Spend 5 minutes journaling your thoughts, and then pick one small action to address a concern.\n2. Practice mindfulness for 10 minutes, focusing on your breath and bodily sensations.\n3. Set a timer for 15 minutes where you allow yourself to worry, then consciously switch your attention to something else.", "bot-message");
            break;
        case 'depression':
            displayMessage("1. Set one small, achievable goal for the day and complete it, like cleaning a small area or going for a short walk.\n2. Spend 5 minutes outside in sunlight if possible; fresh air and nature can lift your mood.\n3. Try 10 minutes of physical activity to get your body moving and your mind refreshed.", "bot-message");
            break;
        case 'anxiety':
            displayMessage("1. Practice deep breathing for 5 minutes, focusing on slow inhales and exhales.\n2. Try the '5-4-3-2-1' grounding exercise: identify 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste.\n3. Write down your anxious thoughts, then challenge their validity with evidence.", "bot-message");
            break;
        case 'loneliness':
            displayMessage("1. Write a letter or message to a friend or family member, even if you don’t send it.\n2. Spend 10 minutes doing a creative activity, such as drawing, writing, or crafting.\n3. Join an online community or group that shares your interests to foster connection.", "bot-message");
            break;
        case 'stress':
            displayMessage("1. Do a 5-minute body scan meditation to become aware of tension in different parts of your body and release it.\n2. Spend 10 minutes organizing a small space or task to reduce mental clutter.\n3. Try progressive muscle relaxation by tensing and releasing each muscle group, starting from your feet to your head.", "bot-message");
            break;
        case 'cyber bullying':
            displayMessage("1. Practice writing a short, non-emotional response to the bully if necessary, but aim to block and avoid further contact.\n2. Keep a journal of your emotions related to the bullying and reflect on them.\n3. Reach out to a friend or family member to talk about your experience.", "bot-message");
            break;
        case 'suicidal thoughts':
            displayMessage("1. Try grounding techniques like holding an ice cube or counting backward from 100 to break intrusive thoughts.\n2. Reach out to someone you trust and let them know how you’re feeling, even if it feels hard.\n3. Create a list of reasons to stay alive or things you’d miss if you weren’t around.", "bot-message");
            break;
        case 'online blackmailing':
            displayMessage("1. Write down everything that happened without self-blame to keep track of events and focus on facts.\n2. Practice self-care by engaging in activities that relax you, such as listening to music or taking a walk.\n3. Talk to someone about what’s happening; sharing the burden often helps reduce emotional stress.", "bot-message");
            break;
        case 'feeling low':
            displayMessage("1. Practice gratitude by writing down three things you’re grateful for today.\n2. Do a 10-minute physical exercise like stretching or light yoga to boost your energy levels.\n3. Connect with a friend or family member, even for a quick chat, to remind yourself you’re not alone.", "bot-message");
            break;
        case 'guilt':
            displayMessage("1. Write down the source of your guilt and ask yourself if it’s realistic to carry this burden.\n2. Create a self-forgiveness mantra and repeat it whenever you feel guilty.\n3. Reflect on what you can learn from the situation and set a goal to avoid similar outcomes in the future.", "bot-message");
            break;
        case 'helpless':
            displayMessage("1. Break a large task into smaller, more manageable pieces and start with the easiest one.\n2. Practice saying positive affirmations like 'I am capable' and 'I have control over my actions.'\n3. Do a small act of kindness for someone else to regain a sense of purpose and connection.", "bot-message");
            break;
        case 'anger':
            displayMessage("1. Count to 10 before reacting in a heated situation to give yourself time to cool down.\n2. Engage in physical exercise, like a brisk walk or run, to release built-up energy.\n3. Practice deep breathing or meditation to calm your mind when you feel anger rising.", "bot-message");
            break;
        case 'worthless':
            displayMessage("1. Write down 5 things you like about yourself, no matter how small or simple.\n2. Set one small goal for the day and celebrate it when you achieve it.\n3. Engage in an activity that makes you feel competent or brings you joy, like a hobby or creative task.", "bot-message");
            break;
        default:
            displayMessage("If you'd like more tips or exercises, feel free to ask! I'm here to help.", "bot-message");
    }
}

function connectToProfessional() {
    
    const location = prompt("Please enter your city or location:");

   
    if (location) {
        const searchQuery = encodeURIComponent(`psychiatrist near ${location}`);
        const url = `https://www.google.com/maps/search/${searchQuery}`;

     
        window.open(url, '_blank');
    } else {
        
        alert("Please provide a location to find nearby help.");
    }
}


document.getElementById('user-input').addEventListener('input', (event) => {
    const userInput = event.target.value.toLowerCase();
    if (userInput.includes('yes') || userInput.includes('provide tips') || userInput.includes('tips')) {
        askingForTips = true;
    } else if (userInput.includes('exercise')) {
        askingForExercise = true;
    }
});