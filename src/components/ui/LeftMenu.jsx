import React from "react";
import btnBg from "../../assets/img/btns/btn-arrow.png";

/* ============================================================
   📝 Menu Items Array
   ============================================================
   Defines the list of items that will appear in the left
   vertical menu. Easily extendable or editable without
   modifying the component logic.
============================================================ */
const menuItems = ["Game Story", "Requirements", "Gameplay", "Credits..."];

/* ============================================================
   🧩 LeftMenu Component
   ============================================================
   Renders a vertical, fixed-position menu on the left side
   of the screen with custom background buttons. Each button
   supports hover effects and highlights using shadows and
   scaling.
============================================================ */
const LeftMenu = () => {
  return (
    /* --------------------------------------------------------
       🌐 Container
       --------------------------------------------------------
       Positioned fixed on the left with bottom spacing.
       Flex column layout with spacing between buttons.
       High z-index ensures it overlays other content.
    -------------------------------------------------------- */
    <div className="fixed -left-10 bottom-30 flex flex-col space-y-3 z-50">

      {/* --------------------------------------------------------
         🔘 Map Menu Items
         --------------------------------------------------------
         Loop through the menuItems array to generate buttons.
         Each button has:
         - A background image (btnBg)
         - Hover scale effect
         - Shadow for depth
         - Proper padding for text alignment
         - Font styling for consistency
      -------------------------------------------------------- */}
      {menuItems.map((item, index) => (
        <button
          key={index}
          className="relative w-[35vh] h-[7vh] flex items-center opacity-90 justify-start pl-15 pb-2 font-bold shadow-lg hover:scale-105 transform duration-500 cursor-pointer"
          style={{
            backgroundImage: `url(${btnBg})`,   // Custom button background
            backgroundSize: "cover",            // Cover full button area
            backgroundPosition: "center",       // Center the image
          }}
        >
          {/* --------------------------------------------------------
             📌 Button Label
             --------------------------------------------------------
             The text label inside the button with specific color
             and size. Easily editable for styling or localization.
          -------------------------------------------------------- */}
          <h1 className="text-2xl text-[#e8ad68]">{item}</h1>
        </button>
      ))}
    </div>
  );
};

export default LeftMenu;
