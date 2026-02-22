import Text "mo:core/Text";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
  };

  let messages = List.empty<ContactMessage>();

  module ContactMessage {
    public func compare(a : ContactMessage, b : ContactMessage) : Order.Order {
      Text.compare(a.email, b.email);
    };
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    if (name.isEmpty() or email.isEmpty() or message.isEmpty()) {
      Runtime.trap("All fields are required");
    };

    let newMessage : ContactMessage = {
      name;
      email;
      message;
    };

    messages.add(newMessage);
  };

  public query ({ caller }) func getMessages() : async [ContactMessage] {
    messages.toArray().sort();
  };
};
