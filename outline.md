# Extensible jQuery Plugin Development

## Problem:

Using jQuery plugins to perform tasks and solve problems saves on development
time, but usually leads to compromising how something looks/works/feels or
requires opening up the plugin and customizing it to fit the use case.

## Solution:

With the method of developing plugins that I've been using recently, customizing
how a plugin behaves on both a single element and plugin-wide basis is much
easier than having to open up the plugin and sift through the author's code.

## Content:

### Plugin authoring article (Mike Alsup)

Great for beginners; explains what the method's context is and how you should
pass in arguments and extend defaults with them. Leaves much to be desired in
the way of maintainability and extensibility.

### Example plugin

Demonstrate simple need for accordion animation. Choose sample plugin to solve
problem. Review code of original, dissecting and explaining basic parts to
a plugin.

Implement plugin on accordion elements, but then explain that the client wants
to change their behavior based on an element being interacted with. Not possible
with current plugin, so the plugin itself needs to be modified.

Open plugin, review change that would likely be made. Add property to the
options object that will be used to determine what animation method will be used
to toggle element. Return to plugin activating code and add click event to
anchor that unbinds the events and rebinds with newly created property added to
options object.

### Review initial improvements to plugin

Some improvements that can be added include providing a plugin name that can
be easily changed within the plugin file in the event an existing method
exists, namespacing event bindings, and optionally live binding event so
future elements will receive event.

### Dive in to rewriting plugin

Explain two basic parts to new plugin code, the plugin object containing
all methods and defaults and the initializer that both extends the object
for each element and writes the extended object to a data object on each
element for retrieval and modification after initialization.

Once plugin has been rewritten, explain process for overriding plugin method
and option once anchor is clicked. Demo changed code. Explain how this will
ultimately make for a more usable plugin by making it easier for users to write
their own modifications rather than request new features, submit pull requests
to add in additional options, and go elsewhere to plugins that may do the job
but be heavier code base. Development process also set up to ensure that any
updated plugin version will still work with the user-defined overrides provided
the property and method names remain intact. Core code can be changed by the
author without worry that plugin users will have to retrofit the new plugin with
the modified code from their old instance.
