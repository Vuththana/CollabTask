import { FaEllipsisV, FaEnvelope } from "react-icons/fa";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import _, { upperFirst } from "lodash";
import { Badge } from "../ui/badge";
import { count } from "console";

interface Member {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface Invitations {
  id: number;
  recipient_name: string;
  invited_by: string;
}

interface Project {
  id: number;
  name: string;
  role: string;
  members: Member[];
}

interface TeamCardProps {
  project_users: Project[];
  invited_by: Invitations[];
}

const TeamCard = ({ project_users, invited_by }: TeamCardProps) => {
  const allMembers = project_users.flatMap((project) => project.members); // Get all the members array inside project array

  const grouped = _.uniqBy(invited_by, "recipient_name");
  const inviteByName = new Map(
    grouped.map((invite) => [invite.recipient_name, invite]),
  );

  // Get initials for Avatar Fallback
  function getInitials(name: string): string {
    if (!name) return "";
    const words = name.trim().split(" ");
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }
    return (
      words[0].charAt(0).toUpperCase() +
      words[words.length - 1].charAt(0).toUpperCase()
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {allMembers.map((member) => (
        <div className="border rounded-xl bg-card">
          <div className="p-6">
            <div className="space-y-2">
              <div className="flex justify-between mb-4">
                {/* Initials */}
                <Avatar>
                  <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
                </Avatar>

                {/* Actions */}
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="secondary"
                        className="bg-transparent border-transparent shadow-none"
                      >
                        <FaEllipsisV />
                      </Button>
                    </DropdownMenuTrigger>

                    {/* Content */}
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit Role</DropdownMenuItem>
                      <DropdownMenuItem>Send Message</DropdownMenuItem>
                      <DropdownMenuItem>Remove</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {/* Name Email and Roles */}
              <div className="space-y-2 border-b pb-5">
                {/* Name */}
                <p className="font-semibold text-[17px]">{member.name}</p>
                {/* Email */}
                <p className="flex items-center gap-2 text-gray-500 text-sm">
                  <FaEnvelope />
                  {member.email}
                </p>
                {/* Role */}
                {project_users.map((role) => (
                  <Badge
                    variant="secondary"
                    className="bg-gray-200"
                    key={role.role}
                  >
                    {upperFirst(member.role)}
                  </Badge>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-gray-500 text-[12px]">
                  Invited by: {" "}
                  <span className="text-black text-[12px]">
                    {inviteByName.get(member.name)?.invited_by ?? "System"}
                  </span>
                </p>
              </div>

              <div>
                <p className="text-gray-600 text-[14px] font-medium">PROJECTS {member.project_id}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
