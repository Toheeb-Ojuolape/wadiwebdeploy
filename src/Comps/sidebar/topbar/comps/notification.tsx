import { Box, Button, Circle, Text } from "@chakra-ui/react";
import { Notification } from "iconsax-react";

export const NotificationComps = (props: {
  hasNotification: boolean;
  notifcation?: number;
}) => {
  if (props.hasNotification === false) {
    return (
      <Button w='20px'
        
        bg={"rgba(242, 249, 253, 1)"}
      >
        <Notification size="22" color="black" />
      </Button>
    );
  } else {
    return (
      <Button w='20px' bg={'#F2F9FD'}>
        <div className="absolute inline-block top-3 right-3 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1 px-1 text-[10px] leading-none text-center whitespace-nowrap align-baseline font-bold bg-[#F04438] text-white rounded-full z-10 w-fit">
          {props.notifcation}
        </div>
        <div className="px-2 py-2  flex items-center justify-center text-center rounded-lg " >
          <div>
            <Notification size="22" color="black" />
          </div>
        </div>
      </Button>
    );
  }
};
