import { useState } from “react”;

const days = [
{
day: “Monday”,
theme: “🌱 Nature & Numbers”,
color: “#4A7C59”,
light: “#E8F5E2”,
schedule: [
{ time: “7:30 AM”, type: “meal”, label: “Breakfast”, icon: “🍳”, detail: “Eggs + fruit + milk. Calm morning routine — get Emi dressed while baby is in bouncer or carrier.” },
{ time: “8:00 AM”, type: “learn”, label: “Morning Circle Time”, icon: “☀️”, detail: “Sit on a blanket together. Say good morning, talk about the weather, count fingers, sing a simple song (Twinkle Twinkle, ABCs).” },
{ time: “8:20 AM”, type: “learn”, label: “Literacy — Letter of the Week: A”, icon: “📖”, detail: “Show a big letter A. Say words that start with A (apple, ant, alligator). Trace A with finger in a tray of salt or sand.” },
{ time: “8:40 AM”, type: “learn”, label: “Craft: Apple Stamp Art”, icon: “🍎”, detail: “Cut an apple in half, dip in red paint, stamp on paper. Simple fine motor + color recognition.” },
{ time: “9:00 AM”, type: “break”, label: “Snack Break”, icon: “🍌”, detail: “Banana slices + crackers + water. Emi can help ‘pour’ her own cup.” },
{ time: “9:15 AM”, type: “learn”, label: “Math — Counting 1–5”, icon: “🔢”, detail: “Count apple stamps she made. Use blocks or fingers. Stack towers and count each block out loud.” },
{ time: “9:35 AM”, type: “play”, label: “Free Play / Independent Play”, icon: “🧸”, detail: “Emi plays independently (puzzles, dolls, blocks) while you attend to baby — feed, burp, settle.” },
{ time: “10:15 AM”, type: “learn”, label: “Outdoor / Nature Walk”, icon: “🌿”, detail: “10-min walk outside. Find leaves, rocks, bugs. Ask: ‘What color is that?’ ‘How many?’ This IS learning.” },
{ time: “10:35 AM”, type: “learn”, label: “Read-Aloud”, icon: “📚”, detail: “Read 1–2 picture books together. ‘The Very Hungry Caterpillar’ fits the nature theme perfectly.” },
{ time: “11:00 AM”, type: “play”, label: “Sensory Bin Play”, icon: “🌾”, detail: “Fill a bin with dried beans or rice. Hide small animals inside. Emi digs and names what she finds.” },
{ time: “11:30 AM”, type: “meal”, label: “Lunch”, icon: “🥪”, detail: “Grilled cheese or PB&J + veggie sticks + milk. Sit together and talk about what she learned today.” },
{ time: “12:00 PM”, type: “rest”, label: “Quiet Rest / Nap Time”, icon: “😴”, detail: “Emi rests (even if she doesn’t sleep). Audiobook or calm music. YOU rest if baby allows — this is crucial.” },
{ time: “1:30 PM”, type: “learn”, label: “Afternoon Activity: Playdough”, icon: “🟡”, detail: “Roll, squish, make shapes. You can say ‘make a ball,’ ‘make a snake.’ Fine motor gold.” },
{ time: “2:00 PM”, type: “play”, label: “Creative Free Play”, icon: “🎨”, detail: “Crayons, coloring pages, stickers. You manage baby; Emi creates independently.” },
{ time: “2:30 PM”, type: “break”, label: “Afternoon Snack”, icon: “🍇”, detail: “Grapes (halved) + cheese cubes + water.” },
{ time: “2:45 PM”, type: “learn”, label: “Music & Movement”, icon: “🎵”, detail: “Dance to kids’ songs (Cocomelon, Kidz Bop). Freeze dance. Clap rhythms. 10 minutes of pure joy.” },
{ time: “3:00 PM”, type: “wrap”, label: “Wrap-Up Circle”, icon: “⭐”, detail: “Ask Emi: ‘What was your favorite thing today?’ Put away toys together. Celebrate the day.” },
]
},
{
day: “Tuesday”,
theme: “🎨 Colors & Creativity”,
color: “#C0694A”,
light: “#FDEEE9”,
schedule: [
{ time: “7:30 AM”, type: “meal”, label: “Breakfast”, icon: “🥞”, detail: “Pancakes + berries + milk. Let Emi pour syrup herself.” },
{ time: “8:00 AM”, type: “learn”, label: “Morning Circle Time”, icon: “☀️”, detail: “What day is it? What’s the weather? Review Letter A from Monday. Count to 5 together.” },
{ time: “8:20 AM”, type: “learn”, label: “Color Lesson: Red & Blue”, icon: “🔴”, detail: “Hunt around the house for red things and blue things. Sort them into two piles.” },
{ time: “8:40 AM”, type: “learn”, label: “Art: Color Mixing”, icon: “🖌️”, detail: “Use watercolors — mix red + blue to make purple. Emi will be amazed. Talk about what happened.” },
{ time: “9:00 AM”, type: “break”, label: “Snack Break”, icon: “🍓”, detail: “Strawberries + yogurt. Red AND pink — color connection!” },
{ time: “9:15 AM”, type: “learn”, label: “Literacy — Letter B”, icon: “📖”, detail: “Letter B words: bear, ball, banana, baby (tie to baby sibling!). Trace B in the air, on paper, on your back.” },
{ time: “9:35 AM”, type: “play”, label: “Free Play / Independent Play”, icon: “🧸”, detail: “Emi plays while you tend to baby. Set up a simple invitation to play: stuffed animals + teacups.” },
{ time: “10:15 AM”, type: “learn”, label: “Story Time”, icon: “📚”, detail: “‘Brown Bear, Brown Bear, What Do You See?’ Perfect for colors + reading.” },
{ time: “10:35 AM”, type: “learn”, label: “Math — Shapes Introduction”, icon: “🔷”, detail: “Cut shapes from construction paper. Circle, square, triangle. Sort them. Stack them. Name them.” },
{ time: “11:00 AM”, type: “play”, label: “Outdoor Play”, icon: “🌞”, detail: “Chalk drawings outside. Draw shapes and have Emi jump into them. Gross motor + shape review.” },
{ time: “11:30 AM”, type: “meal”, label: “Lunch”, icon: “🥗”, detail: “Mac & cheese + peas + apple slices. Ask Emi to find the green peas.” },
{ time: “12:00 PM”, type: “rest”, label: “Quiet Rest / Nap”, icon: “😴”, detail: “Rest time. Put on an audiobook or calm instrumental playlist for Emi’s room.” },
{ time: “1:30 PM”, type: “learn”, label: “Afternoon: Rainbow Collage”, icon: “🌈”, detail: “Cut colored paper scraps and glue onto a rainbow outline. Talk through each color as she pastes.” },
{ time: “2:00 PM”, type: “play”, label: “Block Building”, icon: “🧱”, detail: “Build towers by color. ‘Can you stack all the red ones?’ Great for sorting + focus.” },
{ time: “2:30 PM”, type: “break”, label: “Afternoon Snack”, icon: “🧀”, detail: “Cheese crackers + apple slices + water.” },
{ time: “2:45 PM”, type: “learn”, label: “Music: Color Songs”, icon: “🎵”, detail: “Play ‘I Can Sing a Rainbow.’ Then make up your own song about her artwork.” },
{ time: “3:00 PM”, type: “wrap”, label: “Wrap-Up Circle”, icon: “⭐”, detail: “Display her rainbow collage somewhere she can see it. Big pride moment.” },
]
},
{
day: “Wednesday”,
theme: “🐾 Animals & Sounds”,
color: “#7B5EA7”,
light: “#F0EBF8”,
schedule: [
{ time: “7:30 AM”, type: “meal”, label: “Breakfast”, icon: “🥣”, detail: “Oatmeal with banana + milk. Shape the oatmeal into an animal face using fruit.” },
{ time: “8:00 AM”, type: “learn”, label: “Morning Circle Time”, icon: “☀️”, detail: “Quick review: colors from Tuesday, count 1–5, Letter A & B. Introduce today’s animal theme.” },
{ time: “8:20 AM”, type: “learn”, label: “Literacy — Letter C”, icon: “📖”, detail: “C is for cat, cow, chicken, crocodile. Make the C with your arm. Find C in books.” },
{ time: “8:40 AM”, type: “learn”, label: “Animal Sound Matching Game”, icon: “🐮”, detail: “Gather stuffed animals or print animal cards. Make the sound — Emi finds the right animal. Swap turns.” },
{ time: “9:00 AM”, type: “break”, label: “Snack Break”, icon: “🐛”, detail: “Raisins on a celery stick (ants on a log!). Talk about ants — tiny animal, big team.” },
{ time: “9:15 AM”, type: “learn”, label: “Math — Counting 6–10”, icon: “🔢”, detail: “Count her stuffed animals. Line them up 1–10 if possible. How many legs does a dog have? 4! Count.” },
{ time: “9:35 AM”, type: “play”, label: “Independent Play”, icon: “🧸”, detail: “Animal figurine play, Noah’s ark set, or stuffed animal tea party. Baby time for you.” },
{ time: “10:15 AM”, type: “learn”, label: “Read-Aloud”, icon: “📚”, detail: “‘Dear Zoo’ by Rod Campbell or ‘From Head to Toe’ by Eric Carle. Interactive — Emi acts out the animals.” },
{ time: “10:35 AM”, type: “learn”, label: “Animal Craft: Paper Plate Cat”, icon: “🐱”, detail: “Paper plate + triangle ears + marker face. Emi decorates however she wants. Imperfect is perfect.” },
{ time: “11:00 AM”, type: “play”, label: “Outdoor Animal Safari”, icon: “🦋”, detail: “Go outside and be ‘animal explorers.’ Look for birds, bugs, squirrels. Tally what you find.” },
{ time: “11:30 AM”, type: “meal”, label: “Lunch”, icon: “🥪”, detail: “Turkey roll-ups + cucumber slices + fruit. Let Emi use a cookie cutter to make fun shapes.” },
{ time: “12:00 PM”, type: “rest”, label: “Quiet Rest / Nap”, icon: “😴”, detail: “Rest with animal sounds white noise or jungle ambient audio.” },
{ time: “1:30 PM”, type: “learn”, label: “Afternoon: Animal Movement”, icon: “🐘”, detail: “‘Move like a…’ game. Hop like a frog, stomp like an elephant, slither like a snake. Huge gross motor win.” },
{ time: “2:00 PM”, type: “play”, label: “Puzzles or Sorting”, icon: “🧩”, detail: “Animal puzzles, or sort animal pictures into farm/wild/ocean categories.” },
{ time: “2:30 PM”, type: “break”, label: “Afternoon Snack”, icon: “🍊”, detail: “Oranges + peanut butter crackers.” },
{ time: “2:45 PM”, type: “learn”, label: “Science: Where Do Animals Live?”, icon: “🌍”, detail: “Simple talk: fish live in water, birds live in trees, dogs live with us. Draw simple homes.” },
{ time: “3:00 PM”, type: “wrap”, label: “Wrap-Up Circle”, icon: “⭐”, detail: “Emi’s favorite animal of the day? She draws it. You label it together.” },
]
},
{
day: “Thursday”,
theme: “🔢 Math & Movement”,
color: “#2A7BA8”,
light: “#E3F2FA”,
schedule: [
{ time: “7:30 AM”, type: “meal”, label: “Breakfast”, icon: “🍳”, detail: “Scrambled eggs + toast + orange juice. Count the pieces of toast together.” },
{ time: “8:00 AM”, type: “learn”, label: “Morning Circle Time”, icon: “☀️”, detail: “Review A, B, C. Count 1–10. Talk about the day of the week: Thursday = almost Friday!” },
{ time: “8:20 AM”, type: “learn”, label: “Math — More/Less & Big/Small”, icon: “⚖️”, detail: “Compare groups: ‘I have 3 grapes, you have 5 — who has MORE?’ Use blocks, toys, anything.” },
{ time: “8:40 AM”, type: “learn”, label: “Literacy — Letter D”, icon: “📖”, detail: “D is for dog, duck, dinosaur, door. Trace D on paper, walk to the door and back.” },
{ time: “9:00 AM”, type: “break”, label: “Snack Break”, icon: “🍎”, detail: “Apple slices + almond butter + water.” },
{ time: “9:15 AM”, type: “learn”, label: “Gross Motor Math: Number Hopscotch”, icon: “🏃”, detail: “Draw numbers 1–5 on paper plates on the floor. Call a number — Emi jumps to it. Then 1–10.” },
{ time: “9:35 AM”, type: “play”, label: “Independent Play”, icon: “🧸”, detail: “Free build with blocks. Let her create without direction. Baby care time.” },
{ time: “10:15 AM”, type: “learn”, label: “Read-Aloud: Counting Book”, icon: “📚”, detail: “‘Ten Black Dots’ by Donald Crews or ‘1, 2, 3 to the Zoo.’ Point and count every page.” },
{ time: “10:35 AM”, type: “learn”, label: “Shape & Pattern Sorting”, icon: “🔷”, detail: “Lay out colored blocks or buttons — make a simple AB pattern (red, blue, red, blue). Ask Emi what comes next.” },
{ time: “11:00 AM”, type: “play”, label: “Outdoor Play”, icon: “🌳”, detail: “Gather sticks, rocks, or leaves and count them. Make groups. Simple outdoor math.” },
{ time: “11:30 AM”, type: “meal”, label: “Lunch”, icon: “🥗”, detail: “Quesadilla + corn + fruit cup. Count how many pieces she cuts her quesadilla into.” },
{ time: “12:00 PM”, type: “rest”, label: “Quiet Rest / Nap”, icon: “😴”, detail: “Rest time. You likely have a lot going on — take this block for yourself too.” },
{ time: “1:30 PM”, type: “learn”, label: “Afternoon: Number Craft”, icon: “✂️”, detail: “Write large numbers 1–5 on paper. Emi stamps or draws dots on each number (1 dot on 1, 2 on 2, etc.).” },
{ time: “2:00 PM”, type: “play”, label: “Imaginative Play”, icon: “🎭”, detail: “Play store. Give Emi 5 ‘coins’ (buttons). She ‘buys’ items from you. Real-world math magic.” },
{ time: “2:30 PM”, type: “break”, label: “Afternoon Snack”, icon: “🍇”, detail: “Grapes + crackers + milk.” },
{ time: “2:45 PM”, type: “learn”, label: “Movement: Body Part Math”, icon: “💪”, detail: “‘How many eyes do you have? How many ears? How many fingers on one hand?’ Clap and count.” },
{ time: “3:00 PM”, type: “wrap”, label: “Wrap-Up Circle”, icon: “⭐”, detail: “What number is Emi’s favorite? Draw it BIG together. Celebrate the whole week so far.” },
]
},
{
day: “Friday”,
theme: “⭐ Review & Play Day”,
color: “#C08B2F”,
light: “#FDF3DC”,
schedule: [
{ time: “7:30 AM”, type: “meal”, label: “Special Breakfast”, icon: “🥐”, detail: “Let Emi ‘help’ — pour cereal, place fruit. A little independence goes a long way on Fridays.” },
{ time: “8:00 AM”, type: “learn”, label: “Morning Circle: Week Review”, icon: “☀️”, detail: “Go through the week: ‘What animals did we learn? What letters? What colors?’ Let her lead.” },
{ time: “8:20 AM”, type: “learn”, label: “Literacy Review: A B C D”, icon: “📖”, detail: “Write A, B, C, D on paper. Emi circles or paints over each one. Fun reinforcement.” },
{ time: “8:40 AM”, type: “learn”, label: “Free Art: ‘My Week’ Drawing”, icon: “🎨”, detail: “Ask Emi to draw her favorite thing from this week. Label it together. Keep it for her portfolio.” },
{ time: “9:00 AM”, type: “break”, label: “Snack Break”, icon: “🍩”, detail: “Friday treat! Mini muffin or donut hole + fruit + juice.” },
{ time: “9:15 AM”, type: “learn”, label: “Math Review Game”, icon: “🎲”, detail: “Roll a die (1–6). Emi jumps, claps, or stomps that many times. Fast, fun, physical.” },
{ time: “9:35 AM”, type: “play”, label: “Choice Play Time”, icon: “🧸”, detail: “Emi picks what she wants to play. Autonomy is huge for 3-year-olds. Baby time for you.” },
{ time: “10:15 AM”, type: “learn”, label: “Storytime: Her Favorite Book”, icon: “📚”, detail: “Let Emi pick the book. Even if it’s the 100th time. Repetition = reading comprehension at this age.” },
{ time: “10:35 AM”, type: “play”, label: “Outdoor / Active Play”, icon: “🌸”, detail: “Bubbles, sidewalk chalk, scooter, sandbox — anything active and joyful. Friday energy!” },
{ time: “11:30 AM”, type: “meal”, label: “Lunch”, icon: “🍕”, detail: “Pizza Friday! Mini personal pizza she helps top. Count the pepperonis.” },
{ time: “12:00 PM”, type: “rest”, label: “Rest / Nap”, icon: “😴”, detail: “Rest time. After a full week, everyone needs it — you most of all.” },
{ time: “1:30 PM”, type: “learn”, label: “Afternoon: Show & Tell Practice”, icon: “🌟”, detail: “Emi picks a toy and ‘presents’ it to you and baby. What is it? What color? What does it do? Language development.” },
{ time: “2:00 PM”, type: “play”, label: “Sensory or Water Play”, icon: “💧”, detail: “Fill the sink or a bin with water + cups + funnels. Pour, splash, measure. Total delight.” },
{ time: “2:30 PM”, type: “break”, label: “Afternoon Snack”, icon: “🍦”, detail: “Friday ice cream moment OR smoothie. Celebrate the week.” },
{ time: “2:45 PM”, type: “wrap”, label: “Weekly Celebration Ceremony”, icon: “🎉”, detail: “Tell Emi 3 things she did amazingly this week. Make it specific. ‘You counted to 10 all by yourself.’ She will glow.” },
{ time: “3:00 PM”, type: “wrap”, label: “Weekend Begins!”, icon: “🌈”, detail: “Pack away the week’s art. Weekend is family time — no curriculum pressure. You both earned it.” },
]
}
];

const typeStyles = {
meal:   { bg: “#FFF3CD”, border: “#F4C430”, icon: “🍽️”, label: “Meal” },
learn:  { bg: “#EAF4FF”, border: “#5BA4CF”, icon: “📘”, label: “Learning” },
play:   { bg: “#F0FFF0”, border: “#68C17A”, icon: “🎈”, label: “Play” },
break:  { bg: “#FFF0F5”, border: “#E08BB5”, icon: “🫐”, label: “Snack” },
rest:   { bg: “#F5F0FF”, border: “#A68FD8”, icon: “💤”, label: “Rest” },
wrap:   { bg: “#FFF8EC”, border: “#E8A838”, icon: “⭐”, label: “Wrap-Up” },
};

export default function EmiHomeschool() {
const [activeDay, setActiveDay] = useState(0);
const [expandedItem, setExpandedItem] = useState(null);
const day = days[activeDay];

return (
<div style={{
fontFamily: “‘Georgia’, ‘Times New Roman’, serif”,
background: “linear-gradient(135deg, #fdfaf5 0%, #f5f0e8 100%)”,
minHeight: “100vh”,
padding: “0 0 40px 0”,
}}>
{/* Header */}
<div style={{
background: `linear-gradient(135deg, ${day.color} 0%, ${day.color}cc 100%)`,
padding: “28px 24px 20px”,
textAlign: “center”,
transition: “background 0.4s ease”,
}}>
<div style={{ fontSize: 13, letterSpacing: 3, color: “rgba(255,255,255,0.8)”, textTransform: “uppercase”, marginBottom: 4 }}>
Emi’s Homeschool Plan
</div>
<h1 style={{ color: “#fff”, fontSize: 26, fontWeight: “bold”, margin: “4px 0 2px”, fontFamily: “‘Georgia’, serif” }}>
Week One 🌸
</h1>
<div style={{ color: “rgba(255,255,255,0.85)”, fontSize: 13, marginTop: 4 }}>
Ages 3 · Newborn-friendly schedule · April 2026
</div>
</div>

```
  {/* Tip banner */}
  <div style={{
    background: "#FFFBF0",
    borderLeft: "4px solid #E8A838",
    margin: "16px 16px 0",
    padding: "10px 14px",
    borderRadius: "0 8px 8px 0",
    fontSize: 13,
    color: "#7A5A20",
    lineHeight: 1.5,
  }}>
    💛 <strong>Mama note:</strong> With an 11-week-old, flexibility IS the plan. If a block gets skipped, that's okay. Emi learns from everything — including watching you love her baby sibling.
  </div>

  {/* Day Tabs */}
  <div style={{ display: "flex", overflowX: "auto", padding: "16px 16px 0", gap: 8 }}>
    {days.map((d, i) => (
      <button
        key={d.day}
        onClick={() => { setActiveDay(i); setExpandedItem(null); }}
        style={{
          flexShrink: 0,
          padding: "8px 14px",
          borderRadius: 24,
          border: "2px solid",
          borderColor: activeDay === i ? d.color : "#ddd",
          background: activeDay === i ? d.color : "#fff",
          color: activeDay === i ? "#fff" : "#666",
          fontFamily: "'Georgia', serif",
          fontSize: 13,
          fontWeight: activeDay === i ? "bold" : "normal",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
      >
        {d.day}
      </button>
    ))}
  </div>

  {/* Day Theme */}
  <div style={{
    margin: "14px 16px 4px",
    display: "flex",
    alignItems: "center",
    gap: 10,
  }}>
    <div style={{
      background: day.light,
      border: `2px solid ${day.color}40`,
      borderRadius: 12,
      padding: "8px 16px",
      fontSize: 15,
      color: day.color,
      fontWeight: "bold",
      fontFamily: "'Georgia', serif",
    }}>
      {day.theme}
    </div>
  </div>

  {/* Legend */}
  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, padding: "8px 16px 4px" }}>
    {Object.entries(typeStyles).map(([k, v]) => (
      <div key={k} style={{
        fontSize: 11,
        background: v.bg,
        border: `1px solid ${v.border}`,
        borderRadius: 12,
        padding: "2px 8px",
        color: "#555",
      }}>
        {v.label}
      </div>
    ))}
  </div>

  {/* Schedule Items */}
  <div style={{ padding: "8px 16px 0" }}>
    {day.schedule.map((item, i) => {
      const ts = typeStyles[item.type] || typeStyles.learn;
      const isOpen = expandedItem === i;
      return (
        <div
          key={i}
          onClick={() => setExpandedItem(isOpen ? null : i)}
          style={{
            background: isOpen ? ts.bg : "#fff",
            border: `1.5px solid ${isOpen ? ts.border : "#e8e0d5"}`,
            borderRadius: 12,
            marginBottom: 8,
            padding: "11px 14px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            boxShadow: isOpen ? `0 2px 8px ${ts.border}33` : "0 1px 3px rgba(0,0,0,0.06)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: ts.bg,
              border: `1.5px solid ${ts.border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              flexShrink: 0,
            }}>
              {item.icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: "bold", fontSize: 14, color: "#333", fontFamily: "'Georgia', serif" }}>
                  {item.label}
                </span>
                <span style={{ fontSize: 12, color: "#999", flexShrink: 0, marginLeft: 8 }}>
                  {item.time}
                </span>
              </div>
              <div style={{ fontSize: 11, color: ts.border, marginTop: 1, fontWeight: "600" }}>
                {typeStyles[item.type]?.label || "Activity"}
              </div>
            </div>
            <div style={{ color: "#bbb", fontSize: 12, marginLeft: 4 }}>
              {isOpen ? "▲" : "▼"}
            </div>
          </div>
          {isOpen && (
            <div style={{
              marginTop: 10,
              paddingTop: 10,
              borderTop: `1px solid ${ts.border}55`,
              fontSize: 13,
              color: "#555",
              lineHeight: 1.6,
              fontFamily: "Georgia, serif",
            }}>
              {item.detail}
            </div>
          )}
        </div>
      );
    })}
  </div>

  {/* Footer */}
  <div style={{
    margin: "20px 16px 0",
    background: "#fff",
    border: "1.5px solid #e8e0d5",
    borderRadius: 14,
    padding: "16px",
  }}>
    <div style={{ fontSize: 14, fontWeight: "bold", color: "#444", marginBottom: 8, fontFamily: "Georgia, serif" }}>
      📌 Weekly Curriculum Overview
    </div>
    <div style={{ fontSize: 12, color: "#666", lineHeight: 1.7 }}>
      <strong>Letters:</strong> A (Mon) · B (Tue) · C (Wed) · D (Thu) · Review (Fri)<br/>
      <strong>Math:</strong> Counting 1–5 → 6–10 · Shapes · More/Less · Patterns<br/>
      <strong>Themes:</strong> Nature · Colors · Animals · Movement · Review & Play<br/>
      <strong>Skills:</strong> Fine motor · Gross motor · Language · Creativity · Independence<br/>
      <strong>Read-Alouds:</strong> 1–2 books daily · Let Emi pick on Fridays
    </div>
  </div>

  <div style={{
    textAlign: "center",
    marginTop: 20,
    fontSize: 12,
    color: "#bbb",
    fontStyle: "italic",
  }}>
    Made with love for Emi & her mama 🌸
  </div>
</div>
```

);
}
